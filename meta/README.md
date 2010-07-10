## Meta-text

Meta-text is a superset of plain text that assigns context based on identifiers.

Meta-identifiers:

    !  priority
    ^  calendar + relatives: now, today, tomorrow, ...
    *  repeating
    #  tags
    @  contact
    =  location
    ~  duration estimate
    [  link
    -- multiline markdown
    :: context

A meta-string is a meta-identifier followed immediately by a word. The only exception is --.

Any meta-string except #word [link can be immediately followed by #name to assign a name to the string. A [link can be immediately #url.

## Examples

    I need @Anna to !help with the [Groceries #shopping #list for ^Sunday. It should only take ~15min at =Publix =-44.2,-25.6.

### Plain text

    Meta-text is a superset of plain text.

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

    =44.1,66.4#home
    =here

Named:

    =home

Address:

    =123-Main-St.,32789#Target

### Contacts

    @Anna
    @800.555.1234#Work

### Durations

    ~3h30m
    ~1y
    ~6mo

### Repetitions

    *1mo

### Links

    [groceries
    [party#https://mail.google.com/mail/?ui=2&shva=1#label/_data_/123bb3b356190ba1

### Markdown

    The following is markdown -- [home](http://github.com/nicerobot/text-plain)\n_italics_\n## Header\n\n- bullet

### Context

    :c=1275725795:

Context is generally automated by processing utilities at the time of creation but can be specified explicitly as any recognizable date format.
