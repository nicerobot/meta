# CSV Spreadsheet #

**Working Draft : 2011-03-07**

It's a spreadsheet for plain text.

Each "worksheet" is composed of two files, the data and the "cells".

## For example ##

Given this .csv

    A, B, C, D
    1, 2, 3, 4
    2, 3, 4, 5
    3, 4, 5, 6
    4, 5, 6, 7

and this .csvt

    =header(1)
    1, , , , , E, F, G, Sum
    *, , , , , =C + D, =min(A0:A1) + sum(B1:B2) * E, =if(A,C$3,D$3), =sum(A:H)

> **NOTE:** The modification of the CSV format for .csvt files changes the quoting of commas to include (). Alternatively, for strict CSV format, enclose formals containing commas in quotes, e.g. "=IF(A,C$3,D$3)", and escape the "=" as "\=" to create a literal string starting with "=".

The first column of .csvt file is an addressing or processing command. It's either:

- A "=" indicates a processing command.
- Otherwise, it is a cell, row, column or range reference followed by a formula or data.


which can also be written as:

    =header(1)
    E1, E, F, G, Sum
    E*=C + D, =min(A0:A1) + sum(B1:B2) * E, =if(A,C$3,D$3), =sum(A:H)

or even:

    =header(1)
    1, , , , , E, F, G, Sum
    E=C + D
    F=min(A0:A1) + sum(B1:B2) * E
    G=if(A,C$3,D$3)
    H=sum(A:H)

produces this output

    A, B, C, D,  E,     F, G,   Sum
    1, 2, 3, 4,  7, #REF!, 4, #REF!
    2, 3, 4, 5,  9, #REF!, 4, #REF!
    3, 4, 5, 6, 11, #REF!, 4, #REF!
    4, 5, 6, 7, 13,    92, 4,   131

And a more complex .csvt

    =header(1)
    E1, E, F, G, Sum
    
    =body
    *, , , , , =C + D, =min(A0:A1) + sum(B1:B2) * E
    G=IF(A,C$3,D$3)
    
    =final
    =A<                      # insert a column before column A
    A$+1=Total
    I$=sum($B$1:$F$-1)
    
The result is

         , A, B, C, D,  E,     F, G,   Sum,
         , 1, 2, 3, 4,  7, #REF!, 4, #REF!,
         , 2, 3, 4, 5,  9, #REF!, 4, #REF!,
         , 3, 4, 5, 6, 11, #REF!, 4, #REF!,
         , 4, 5, 6, 7, 13,    92, 4,   131,
    Total,  ,  ,  ,  ,   ,      ,  ,      , 104

### Cell References ###

- Cell references works slightly differently than typical spreadsheet references.
  CSV files are processed line by line and references are based on the current row.

#### Column References ####

##### By Letter #####

- A is the first column.
- Generally, C means columns C.
- $ means the last column.

##### By Number ######

- [0] is the first column.
- Generally, [3] means column 3.
- [-1] means the last column.

##### By Name #####

If there is a row header, columns can be referenced by name.

- "C" means the column with the heading C.
- There is no concept of first and last with named columns.

#### Row References

- Only exist within a column reference.
- All row references default to being relative.

##### Within Letter Column #####

- C1 means the cell 1 row before the current row in column C
  - C0 is equivalent to just referring to C. That is, it'll default to the current row.
- C+1 means the cell 1 row after the current row in column C
- (C:E)1 means cells C1, D1 and E1. That is, cells from C, D and E one row before the current row.
- C1:E3 means the matrix of cells between and including C1 and E3

##### Absolute Cells #####

- C$ means the last cell in column C
- *$ means the last row
- *$+1 means to add a row 1 after the last.
  Obviously, anything greater than 1 adds that many rows to the end.
- C$4 means cell C, row row 4

##### Within Number Column #####

- [3,1] means the cell 1 row before the current row in column C
- ([3]:[5])1 means cells C1, D1 and E1
- [3,1]:[5,3] means the matrix of cells between and including C1 and E3
- [3,$] or [3,-1] means the last cell of column C
  Incidentally, any negative address means "from the end".
- [-3,-5] means the cell that is the third column from the right, fifth from the bottom.
- [*,$+1] or just [,$+1] means to add a row 1 after the last.

#### Ranges ####

#### Modifiers ####

- > shift right and/or down. What is shifted is based on selection.
  - C> will shift D: one column to the right.
  - C$1> will shift D1: one column to the right
  - C1> will shift D: one column to the right as each row is processed.
- < move left and/or up. What is moved is based on selection.
  - C< will swap columns B and C
  - C$1< will swap cells B$1 and C$1
  - C1< will swap cells B1 and C1 as each row is processed.
  - C:E<
- ! is used to delete a row, column or cell.
  C! will delete column C shifting D: one column left
- : Indicates a range
  C:E specifies column C, D and E


### Concepts ###

- Header - Defines how to identify the header row.
- Filter - Defines how to identify the data rows.
