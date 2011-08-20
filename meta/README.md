## Meta-text

Meta-text is plain text that assigns context to text based on short, character identifiers.

Meta-identifiers:

       Description              Example                  General
       -----------              -------                  -------
    !  priority.                !2 !hot                  !(number|name)
    ^  calendar | relatives.    ^tomorrow                ^(now|today|tomorrow|...|date)
    #  tags.                    #grocery,eggs #milk      #tags,list
    #t tags.                    #t grocery,eggs,milk     #t tags,list,info,fun
    @  contact.                 @Anna                    @name
    @d mood.                    @d happy                 @d anything
    =  location.                                         =(log,lat|name)
    ~  duration estimate.       ~2h45m                   ~NyNtNwNdNhNmNsNi(^date)
    *  repeating.                                        *TBD
    [  link.                                             [(name=)link
    -m multiline markdown
    -t multiline textile
    -w multiline mediawiki
    :: context

A meta-string is a meta-identifier followed immediately by a word. The only exception is --.

Any meta-string except #word and [link can be immediately followed by #name to assign a name/tag to the string.

## Examples

    I need @Anna to !help with the [Groceries #shopping #list for ^Sunday. It should only take ~15min at =Publix.

### Dates

    ^2010-09-30#my-birthday
    ^tomorrow
    ^now

### Priorities

Numeric priorities:

    !1
    !4

Named priorities:

    !now
    !immediate
    !help
    !soon
    !low

### Locations

Latitude and longitude:

    =48.858845,2.294351#EiffelTower
    =here

Named:

    =home

Address:

    =123-Main-St.,32789#Target

### Contacts

    @Anna
    @800.555.1234#Work
    @tel:800.555.1234#Work

### Durations

    ~3h30m
    ~1y
    ~6mo

Durations default to "from now" (i.e. "^now"). For example

    ~3h30m

is the same as

    ~3h30m^now

### Repetitions

    *1mo

Repetitions default to "from now". See Durations.

### Links

    [groceries
    [party=http://www.group.as/friendfeed/

### Markdown

    The following is markdown -- [home](http://github.com/nicerobot/text-plain)\n_italics_\n## Header\n\n- bullet

### Context

    :c=1265000033:

Context is generally automated by processing utilities at the time of creation but can be specified explicitly as any recognizable date format.

## Relative Data

### Relative Dates

Relative dates are always transformed into a fixed format at the time of processing. For example,

    ^now

is transformed into

    ^now=1265000033

### Relative Locations

Relative locations are always transformed into a fixed location at the time of processing. For example,

    =here

is transformed into

    =here=48.858845,2.294351
