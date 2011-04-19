#!/usr/bin/env ruby
#
# /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g
# --
# Generated using ANTLR version: 3.3 Nov 30, 2010 12:45:30
# Ruby runtime library version: 1.8.1
# Input grammar file: /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g
# Generated at: 2011-04-19 00:16:01
# 

# ~~~> start load path setup
this_directory = File.expand_path( File.dirname( __FILE__ ) )
$LOAD_PATH.unshift( this_directory ) unless $LOAD_PATH.include?( this_directory )

antlr_load_failed = proc do
  load_path = $LOAD_PATH.map { |dir| '  - ' << dir }.join( $/ )
  raise LoadError, <<-END.strip!
  
Failed to load the ANTLR3 runtime library (version 1.8.1):

Ensure the library has been installed on your system and is available
on the load path. If rubygems is available on your system, this can
be done with the command:
  
  gem install antlr3

Current load path:
#{ load_path }

  END
end

defined?( ANTLR3 ) or begin
  
  # 1: try to load the ruby antlr3 runtime library from the system path
  require 'antlr3'
  
rescue LoadError
  
  # 2: try to load rubygems if it isn't already loaded
  defined?( Gem ) or begin
    require 'rubygems'
  rescue LoadError
    antlr_load_failed.call
  end
  
  # 3: try to activate the antlr3 gem
  begin
    Gem.activate( 'antlr3', '~> 1.8.1' )
  rescue Gem::LoadError
    antlr_load_failed.call
  end
  
  require 'antlr3'
  
end
# <~~~ end load path setup


module StruxtRuby
  # TokenData defines all of the token type integer values
  # as constants, which will be included in all 
  # ANTLR-generated recognizers.
  const_defined?( :TokenData ) or TokenData = ANTLR3::TokenScheme.new

  module TokenData

    # define the token constants
    define_tokens( :EOF => -1, :T__19 => 19, :T__20 => 20, :T__21 => 21, 
                   :T__22 => 22, :T__23 => 23, :T__24 => 24, :T__25 => 25, 
                   :T__26 => 26, :T__27 => 27, :T__28 => 28, :DOC => 4, 
                   :XML => 5, :CDATA => 6, :OP => 7, :PRENS => 8, :ID => 9, 
                   :POSTNS => 10, :STR => 11, :INT => 12, :FLOAT => 13, 
                   :CHAR => 14, :COMMENT => 15, :WS => 16, :EXPONENT => 17, 
                   :HEX_DIGIT => 18 )
    
  end


  class Lexer < ANTLR3::Lexer
    @grammar_home = StruxtRuby
    include TokenData

    
    begin
      generated_using( "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g", "3.3 Nov 30, 2010 12:45:30", "1.8.1" )
    rescue NoMethodError => error
      # ignore
    end
    
    RULE_NAMES   = [ "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
                     "T__25", "T__26", "T__27", "T__28", "PRENS", "POSTNS", 
                     "OP", "ID", "XML", "DOC", "CDATA", "STR", "COMMENT", 
                     "WS", "INT", "FLOAT", "CHAR", "EXPONENT", "HEX_DIGIT" ].freeze
    RULE_METHODS = [ :t__19!, :t__20!, :t__21!, :t__22!, :t__23!, :t__24!, 
                     :t__25!, :t__26!, :t__27!, :t__28!, :prens!, :postns!, 
                     :op!, :id!, :xml!, :doc!, :cdata!, :str!, :comment!, 
                     :ws!, :int!, :float!, :char!, :exponent!, :hex_digit! ].freeze

    
    def initialize( input=nil, options = {} )
      super( input, options )

    end
    
    
    # - - - - - - - - - - - lexer rules - - - - - - - - - - - -
    # lexer rule t__19! (T__19)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__19!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 1 )

      type = T__19
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 7:9: '.'
      match( 0x2e )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 1 )

    end

    # lexer rule t__20! (T__20)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__20!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 2 )

      type = T__20
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 8:9: '{'
      match( 0x7b )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 2 )

    end

    # lexer rule t__21! (T__21)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__21!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 3 )

      type = T__21
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 9:9: '}'
      match( 0x7d )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 3 )

    end

    # lexer rule t__22! (T__22)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__22!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 4 )

      type = T__22
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 10:9: ':'
      match( 0x3a )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 4 )

    end

    # lexer rule t__23! (T__23)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__23!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 5 )

      type = T__23
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 11:9: ';'
      match( 0x3b )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 5 )

    end

    # lexer rule t__24! (T__24)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__24!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 6 )

      type = T__24
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 12:9: ','
      match( 0x2c )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 6 )

    end

    # lexer rule t__25! (T__25)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__25!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 7 )

      type = T__25
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 13:9: '('
      match( 0x28 )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 7 )

    end

    # lexer rule t__26! (T__26)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__26!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 8 )

      type = T__26
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 14:9: ')'
      match( 0x29 )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 8 )

    end

    # lexer rule t__27! (T__27)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__27!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 9 )

      type = T__27
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 15:9: '['
      match( 0x5b )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 9 )

    end

    # lexer rule t__28! (T__28)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def t__28!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 10 )

      type = T__28
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 16:9: ']'
      match( 0x5d )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 10 )

    end

    # lexer rule prens! (PRENS)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def prens!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 11 )

      type = PRENS
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 62:7: ( '!' | '#' | '::' )
      # at line 62:7: ( '!' | '#' | '::' )
      alt_1 = 3
      case look_1 = @input.peek( 1 )
      when 0x21 then alt_1 = 1
      when 0x23 then alt_1 = 2
      when 0x3a then alt_1 = 3
      else
        raise NoViableAlternative( "", 1, 0 )
      end
      case alt_1
      when 1
        # at line 62:8: '!'
        match( 0x21 )

      when 2
        # at line 62:12: '#'
        match( 0x23 )

      when 3
        # at line 62:16: '::'
        match( "::" )

      end

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 11 )

    end

    # lexer rule postns! (POSTNS)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def postns!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 12 )

      type = POSTNS
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 66:7: ( '@' | '\\\\' )
      if @input.peek(1) == 0x40 || @input.peek(1) == 0x5c
        @input.consume
      else
        mse = MismatchedSet( nil )
        recover mse
        raise mse
      end



      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 12 )

    end

    # lexer rule op! (OP)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def op!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 13 )

      type = OP
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
      # at line 70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
      alt_2 = 22
      alt_2 = @dfa2.predict( @input )
      case alt_2
      when 1
        # at line 70:8: '<'
        match( 0x3c )

      when 2
        # at line 70:14: '<<'
        match( "<<" )

      when 3
        # at line 70:21: '<-'
        match( "<-" )

      when 4
        # at line 70:28: '<->'
        match( "<->" )

      when 5
        # at line 70:36: '->'
        match( "->" )

      when 6
        # at line 70:43: '>>'
        match( ">>" )

      when 7
        # at line 70:50: '>'
        match( 0x3e )

      when 8
        # at line 70:56: '~'
        match( 0x7e )

      when 9
        # at line 70:62: '$'
        match( 0x24 )

      when 10
        # at line 70:68: '%'
        match( 0x25 )

      when 11
        # at line 70:74: '^'
        match( 0x5e )

      when 12
        # at line 70:80: '&'
        match( 0x26 )

      when 13
        # at line 70:86: '&&'
        match( "&&" )

      when 14
        # at line 71:7: '*'
        match( 0x2a )

      when 15
        # at line 71:13: '**'
        match( "**" )

      when 16
        # at line 71:20: '-'
        match( 0x2d )

      when 17
        # at line 71:26: '+'
        match( 0x2b )

      when 18
        # at line 71:32: '='
        match( 0x3d )

      when 19
        # at line 71:38: '|'
        match( 0x7c )

      when 20
        # at line 71:44: '||'
        match( "||" )

      when 21
        # at line 71:51: '/'
        match( 0x2f )

      when 22
        # at line 71:57: '?'
        match( 0x3f )

      end

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 13 )

    end

    # lexer rule id! (ID)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def id!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 14 )

      type = ID
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 75:7: ( 'a' .. 'z' | 'A' .. 'Z' | '_' ) ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
      if @input.peek( 1 ).between?( 0x41, 0x5a ) || @input.peek(1) == 0x5f || @input.peek( 1 ).between?( 0x61, 0x7a )
        @input.consume
      else
        mse = MismatchedSet( nil )
        recover mse
        raise mse
      end


      # at line 75:31: ( 'a' .. 'z' | 'A' .. 'Z' | '0' .. '9' | '_' | '-' )*
      while true # decision 3
        alt_3 = 2
        look_3_0 = @input.peek( 1 )

        if ( look_3_0 == 0x2d || look_3_0.between?( 0x30, 0x39 ) || look_3_0.between?( 0x41, 0x5a ) || look_3_0 == 0x5f || look_3_0.between?( 0x61, 0x7a ) )
          alt_3 = 1

        end
        case alt_3
        when 1
          # at line 
          if @input.peek(1) == 0x2d || @input.peek( 1 ).between?( 0x30, 0x39 ) || @input.peek( 1 ).between?( 0x41, 0x5a ) || @input.peek(1) == 0x5f || @input.peek( 1 ).between?( 0x61, 0x7a )
            @input.consume
          else
            mse = MismatchedSet( nil )
            recover mse
            raise mse
          end



        else
          break # out of loop for decision 3
        end
      end # loop for decision 3

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 14 )

    end

    # lexer rule xml! (XML)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def xml!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 15 )

      type = XML
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 79:7: '?xml'
      match( "?xml" )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 15 )

    end

    # lexer rule doc! (DOC)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def doc!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 16 )

      type = DOC
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 83:7: '!!!' ( options {greedy=false; } : . )+ '!!!'
      match( "!!!" )
      # at file 83:13: ( options {greedy=false; } : . )+
      match_count_4 = 0
      while true
        alt_4 = 2
        look_4_0 = @input.peek( 1 )

        if ( look_4_0 == 0x21 )
          look_4_1 = @input.peek( 2 )

          if ( look_4_1 == 0x21 )
            look_4_3 = @input.peek( 3 )

            if ( look_4_3 == 0x21 )
              alt_4 = 2
            elsif ( look_4_3.between?( 0x0, 0x20 ) || look_4_3.between?( 0x22, 0xffff ) )
              alt_4 = 1

            end
          elsif ( look_4_1.between?( 0x0, 0x20 ) || look_4_1.between?( 0x22, 0xffff ) )
            alt_4 = 1

          end
        elsif ( look_4_0.between?( 0x0, 0x20 ) || look_4_0.between?( 0x22, 0xffff ) )
          alt_4 = 1

        end
        case alt_4
        when 1
          # at line 83:38: .
          match_any

        else
          match_count_4 > 0 and break
          eee = EarlyExit(4)


          raise eee
        end
        match_count_4 += 1
      end

      match( "!!!" )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 16 )

    end

    # lexer rule cdata! (CDATA)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def cdata!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 17 )

      type = CDATA
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 87:7: '[[\"' ( options {greedy=false; } : . )+ '\"]]'
      match( "[[\"" )
      # at file 87:13: ( options {greedy=false; } : . )+
      match_count_5 = 0
      while true
        alt_5 = 2
        look_5_0 = @input.peek( 1 )

        if ( look_5_0 == 0x22 )
          look_5_1 = @input.peek( 2 )

          if ( look_5_1 == 0x5d )
            look_5_3 = @input.peek( 3 )

            if ( look_5_3 == 0x5d )
              alt_5 = 2
            elsif ( look_5_3.between?( 0x0, 0x5c ) || look_5_3.between?( 0x5e, 0xffff ) )
              alt_5 = 1

            end
          elsif ( look_5_1.between?( 0x0, 0x5c ) || look_5_1.between?( 0x5e, 0xffff ) )
            alt_5 = 1

          end
        elsif ( look_5_0.between?( 0x0, 0x21 ) || look_5_0.between?( 0x23, 0xffff ) )
          alt_5 = 1

        end
        case alt_5
        when 1
          # at line 87:38: .
          match_any

        else
          match_count_5 > 0 and break
          eee = EarlyExit(5)


          raise eee
        end
        match_count_5 += 1
      end

      match( "\"]]" )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 17 )

    end

    # lexer rule str! (STR)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def str!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 18 )

      type = STR
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 91:5: ( '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"' | '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\'' | '\"' (~ ( '\"' ) )* '\"' )
      alt_9 = 3
      look_9_0 = @input.peek( 1 )

      if ( look_9_0 == 0x22 )
        look_9_1 = @input.peek( 2 )

        if ( look_9_1 == 0x22 )
          look_9_3 = @input.peek( 3 )

          if ( look_9_3 == 0x22 )
            alt_9 = 1
          else
            alt_9 = 3
          end
        elsif ( look_9_1.between?( 0x0, 0x21 ) || look_9_1.between?( 0x23, 0xffff ) )
          alt_9 = 3
        else
          raise NoViableAlternative( "", 9, 1 )
        end
      elsif ( look_9_0 == 0x27 )
        alt_9 = 2
      else
        raise NoViableAlternative( "", 9, 0 )
      end
      case alt_9
      when 1
        # at line 91:7: '\"\"\"' ( options {greedy=false; } : . )* '\"\"\"'
        match( "\"\"\"" )
        # at line 91:13: ( options {greedy=false; } : . )*
        while true # decision 6
          alt_6 = 2
          look_6_0 = @input.peek( 1 )

          if ( look_6_0 == 0x22 )
            look_6_1 = @input.peek( 2 )

            if ( look_6_1 == 0x22 )
              look_6_3 = @input.peek( 3 )

              if ( look_6_3 == 0x22 )
                alt_6 = 2
              elsif ( look_6_3.between?( 0x0, 0x21 ) || look_6_3.between?( 0x23, 0xffff ) )
                alt_6 = 1

              end
            elsif ( look_6_1.between?( 0x0, 0x21 ) || look_6_1.between?( 0x23, 0xffff ) )
              alt_6 = 1

            end
          elsif ( look_6_0.between?( 0x0, 0x21 ) || look_6_0.between?( 0x23, 0xffff ) )
            alt_6 = 1

          end
          case alt_6
          when 1
            # at line 91:38: .
            match_any

          else
            break # out of loop for decision 6
          end
        end # loop for decision 6
        match( "\"\"\"" )

      when 2
        # at line 92:7: '\\'\\'\\'' ( options {greedy=false; } : . )* '\\'\\'\\''
        match( "'''" )
        # at line 92:16: ( options {greedy=false; } : . )*
        while true # decision 7
          alt_7 = 2
          look_7_0 = @input.peek( 1 )

          if ( look_7_0 == 0x27 )
            look_7_1 = @input.peek( 2 )

            if ( look_7_1 == 0x27 )
              look_7_3 = @input.peek( 3 )

              if ( look_7_3 == 0x27 )
                alt_7 = 2
              elsif ( look_7_3.between?( 0x0, 0x26 ) || look_7_3.between?( 0x28, 0xffff ) )
                alt_7 = 1

              end
            elsif ( look_7_1.between?( 0x0, 0x26 ) || look_7_1.between?( 0x28, 0xffff ) )
              alt_7 = 1

            end
          elsif ( look_7_0.between?( 0x0, 0x26 ) || look_7_0.between?( 0x28, 0xffff ) )
            alt_7 = 1

          end
          case alt_7
          when 1
            # at line 92:41: .
            match_any

          else
            break # out of loop for decision 7
          end
        end # loop for decision 7
        match( "'''" )

      when 3
        # at line 93:6: '\"' (~ ( '\"' ) )* '\"'
        match( 0x22 )
        # at line 93:10: (~ ( '\"' ) )*
        while true # decision 8
          alt_8 = 2
          look_8_0 = @input.peek( 1 )

          if ( look_8_0.between?( 0x0, 0x21 ) || look_8_0.between?( 0x23, 0xffff ) )
            alt_8 = 1

          end
          case alt_8
          when 1
            # at line 93:10: ~ ( '\"' )
            if @input.peek( 1 ).between?( 0x0, 0x21 ) || @input.peek( 1 ).between?( 0x23, 0xff )
              @input.consume
            else
              mse = MismatchedSet( nil )
              recover mse
              raise mse
            end



          else
            break # out of loop for decision 8
          end
        end # loop for decision 8
        match( 0x22 )

      end
      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 18 )

    end

    # lexer rule comment! (COMMENT)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def comment!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 19 )

      type = COMMENT
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 97:5: ( '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n' | '/*' ( options {greedy=false; } : . )* '*/' )
      alt_13 = 2
      look_13_0 = @input.peek( 1 )

      if ( look_13_0 == 0x2f )
        look_13_1 = @input.peek( 2 )

        if ( look_13_1 == 0x2f )
          alt_13 = 1
        elsif ( look_13_1 == 0x2a )
          alt_13 = 2
        else
          raise NoViableAlternative( "", 13, 1 )
        end
      else
        raise NoViableAlternative( "", 13, 0 )
      end
      case alt_13
      when 1
        # at line 97:9: '//' (~ ( '\\n' | '\\r' ) )* ( '\\r' )? '\\n'
        match( "//" )
        # at line 97:14: (~ ( '\\n' | '\\r' ) )*
        while true # decision 10
          alt_10 = 2
          look_10_0 = @input.peek( 1 )

          if ( look_10_0.between?( 0x0, 0x9 ) || look_10_0.between?( 0xb, 0xc ) || look_10_0.between?( 0xe, 0xffff ) )
            alt_10 = 1

          end
          case alt_10
          when 1
            # at line 97:14: ~ ( '\\n' | '\\r' )
            if @input.peek( 1 ).between?( 0x0, 0x9 ) || @input.peek( 1 ).between?( 0xb, 0xc ) || @input.peek( 1 ).between?( 0xe, 0xff )
              @input.consume
            else
              mse = MismatchedSet( nil )
              recover mse
              raise mse
            end



          else
            break # out of loop for decision 10
          end
        end # loop for decision 10
        # at line 97:28: ( '\\r' )?
        alt_11 = 2
        look_11_0 = @input.peek( 1 )

        if ( look_11_0 == 0xd )
          alt_11 = 1
        end
        case alt_11
        when 1
          # at line 97:28: '\\r'
          match( 0xd )

        end
        match( 0xa )
        # --> action
        channel=HIDDEN;
        # <-- action

      when 2
        # at line 98:9: '/*' ( options {greedy=false; } : . )* '*/'
        match( "/*" )
        # at line 98:14: ( options {greedy=false; } : . )*
        while true # decision 12
          alt_12 = 2
          look_12_0 = @input.peek( 1 )

          if ( look_12_0 == 0x2a )
            look_12_1 = @input.peek( 2 )

            if ( look_12_1 == 0x2f )
              alt_12 = 2
            elsif ( look_12_1.between?( 0x0, 0x2e ) || look_12_1.between?( 0x30, 0xffff ) )
              alt_12 = 1

            end
          elsif ( look_12_0.between?( 0x0, 0x29 ) || look_12_0.between?( 0x2b, 0xffff ) )
            alt_12 = 1

          end
          case alt_12
          when 1
            # at line 98:42: .
            match_any

          else
            break # out of loop for decision 12
          end
        end # loop for decision 12
        match( "*/" )
        # --> action
        channel=HIDDEN;
        # <-- action

      end
      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 19 )

    end

    # lexer rule ws! (WS)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def ws!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 20 )

      type = WS
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 102:9: ( ' ' | '\\t' | '\\r' | '\\n' )
      if @input.peek( 1 ).between?( 0x9, 0xa ) || @input.peek(1) == 0xd || @input.peek(1) == 0x20
        @input.consume
      else
        mse = MismatchedSet( nil )
        recover mse
        raise mse
      end


      # --> action
      channel=HIDDEN;
      # <-- action

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 20 )

    end

    # lexer rule int! (INT)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def int!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 21 )

      type = INT
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 109:7: ( '0' .. '9' )+
      # at file 109:7: ( '0' .. '9' )+
      match_count_14 = 0
      while true
        alt_14 = 2
        look_14_0 = @input.peek( 1 )

        if ( look_14_0.between?( 0x30, 0x39 ) )
          alt_14 = 1

        end
        case alt_14
        when 1
          # at line 109:7: '0' .. '9'
          match_range( 0x30, 0x39 )

        else
          match_count_14 > 0 and break
          eee = EarlyExit(14)


          raise eee
        end
        match_count_14 += 1
      end


      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 21 )

    end

    # lexer rule float! (FLOAT)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def float!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 22 )

      type = FLOAT
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 113:5: ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT )
      alt_21 = 3
      alt_21 = @dfa21.predict( @input )
      case alt_21
      when 1
        # at line 113:9: ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )?
        # at file 113:9: ( '0' .. '9' )+
        match_count_15 = 0
        while true
          alt_15 = 2
          look_15_0 = @input.peek( 1 )

          if ( look_15_0.between?( 0x30, 0x39 ) )
            alt_15 = 1

          end
          case alt_15
          when 1
            # at line 113:10: '0' .. '9'
            match_range( 0x30, 0x39 )

          else
            match_count_15 > 0 and break
            eee = EarlyExit(15)


            raise eee
          end
          match_count_15 += 1
        end

        match( 0x2e )
        # at line 113:25: ( '0' .. '9' )*
        while true # decision 16
          alt_16 = 2
          look_16_0 = @input.peek( 1 )

          if ( look_16_0.between?( 0x30, 0x39 ) )
            alt_16 = 1

          end
          case alt_16
          when 1
            # at line 113:26: '0' .. '9'
            match_range( 0x30, 0x39 )

          else
            break # out of loop for decision 16
          end
        end # loop for decision 16
        # at line 113:37: ( EXPONENT )?
        alt_17 = 2
        look_17_0 = @input.peek( 1 )

        if ( look_17_0 == 0x45 || look_17_0 == 0x65 )
          alt_17 = 1
        end
        case alt_17
        when 1
          # at line 113:37: EXPONENT
          exponent!

        end

      when 2
        # at line 114:9: '.' ( '0' .. '9' )+ ( EXPONENT )?
        match( 0x2e )
        # at file 114:13: ( '0' .. '9' )+
        match_count_18 = 0
        while true
          alt_18 = 2
          look_18_0 = @input.peek( 1 )

          if ( look_18_0.between?( 0x30, 0x39 ) )
            alt_18 = 1

          end
          case alt_18
          when 1
            # at line 114:14: '0' .. '9'
            match_range( 0x30, 0x39 )

          else
            match_count_18 > 0 and break
            eee = EarlyExit(18)


            raise eee
          end
          match_count_18 += 1
        end

        # at line 114:25: ( EXPONENT )?
        alt_19 = 2
        look_19_0 = @input.peek( 1 )

        if ( look_19_0 == 0x45 || look_19_0 == 0x65 )
          alt_19 = 1
        end
        case alt_19
        when 1
          # at line 114:25: EXPONENT
          exponent!

        end

      when 3
        # at line 115:9: ( '0' .. '9' )+ EXPONENT
        # at file 115:9: ( '0' .. '9' )+
        match_count_20 = 0
        while true
          alt_20 = 2
          look_20_0 = @input.peek( 1 )

          if ( look_20_0.between?( 0x30, 0x39 ) )
            alt_20 = 1

          end
          case alt_20
          when 1
            # at line 115:10: '0' .. '9'
            match_range( 0x30, 0x39 )

          else
            match_count_20 > 0 and break
            eee = EarlyExit(20)


            raise eee
          end
          match_count_20 += 1
        end

        exponent!

      end
      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 22 )

    end

    # lexer rule char! (CHAR)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def char!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 23 )

      type = CHAR
      channel = ANTLR3::DEFAULT_CHANNEL

      
      # - - - - main rule block - - - -
      # at line 119:8: '\\'' (~ ( '\\'' ) )+ '\\''
      match( 0x27 )
      # at file 119:13: (~ ( '\\'' ) )+
      match_count_22 = 0
      while true
        alt_22 = 2
        look_22_0 = @input.peek( 1 )

        if ( look_22_0.between?( 0x0, 0x26 ) || look_22_0.between?( 0x28, 0xffff ) )
          alt_22 = 1

        end
        case alt_22
        when 1
          # at line 119:13: ~ ( '\\'' )
          if @input.peek( 1 ).between?( 0x0, 0x26 ) || @input.peek( 1 ).between?( 0x28, 0xff )
            @input.consume
          else
            mse = MismatchedSet( nil )
            recover mse
            raise mse
          end



        else
          match_count_22 > 0 and break
          eee = EarlyExit(22)


          raise eee
        end
        match_count_22 += 1
      end

      match( 0x27 )

      
      @state.type = type
      @state.channel = channel

    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 23 )

    end

    # lexer rule exponent! (EXPONENT)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def exponent!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 24 )

      
      # - - - - main rule block - - - -
      # at line 124:7: ( 'e' | 'E' ) ( '+' | '-' )? ( '0' .. '9' )+
      if @input.peek(1) == 0x45 || @input.peek(1) == 0x65
        @input.consume
      else
        mse = MismatchedSet( nil )
        recover mse
        raise mse
      end


      # at line 124:17: ( '+' | '-' )?
      alt_23 = 2
      look_23_0 = @input.peek( 1 )

      if ( look_23_0 == 0x2b || look_23_0 == 0x2d )
        alt_23 = 1
      end
      case alt_23
      when 1
        # at line 
        if @input.peek(1) == 0x2b || @input.peek(1) == 0x2d
          @input.consume
        else
          mse = MismatchedSet( nil )
          recover mse
          raise mse
        end



      end
      # at file 124:28: ( '0' .. '9' )+
      match_count_24 = 0
      while true
        alt_24 = 2
        look_24_0 = @input.peek( 1 )

        if ( look_24_0.between?( 0x30, 0x39 ) )
          alt_24 = 1

        end
        case alt_24
        when 1
          # at line 124:29: '0' .. '9'
          match_range( 0x30, 0x39 )

        else
          match_count_24 > 0 and break
          eee = EarlyExit(24)


          raise eee
        end
        match_count_24 += 1
      end


    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 24 )

    end

    # lexer rule hex_digit! (HEX_DIGIT)
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    def hex_digit!
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 25 )

      
      # - - - - main rule block - - - -
      # at line 129:7: ( '0' .. '9' | 'a' .. 'f' | 'A' .. 'F' )
      if @input.peek( 1 ).between?( 0x30, 0x39 ) || @input.peek( 1 ).between?( 0x41, 0x46 ) || @input.peek( 1 ).between?( 0x61, 0x66 )
        @input.consume
      else
        mse = MismatchedSet( nil )
        recover mse
        raise mse
      end



    ensure
      # -> uncomment the next line to manually enable rule tracing
      # trace_out( __method__, 25 )

    end

    # main rule used to study the input at the current position,
    # and choose the proper lexer rule to call in order to
    # fetch the next token
    # 
    # usually, you don't make direct calls to this method,
    # but instead use the next_token method, which will
    # build and emit the actual next token
    def token!
      # at line 1:8: ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR )
      alt_25 = 23
      alt_25 = @dfa25.predict( @input )
      case alt_25
      when 1
        # at line 1:10: T__19
        t__19!

      when 2
        # at line 1:16: T__20
        t__20!

      when 3
        # at line 1:22: T__21
        t__21!

      when 4
        # at line 1:28: T__22
        t__22!

      when 5
        # at line 1:34: T__23
        t__23!

      when 6
        # at line 1:40: T__24
        t__24!

      when 7
        # at line 1:46: T__25
        t__25!

      when 8
        # at line 1:52: T__26
        t__26!

      when 9
        # at line 1:58: T__27
        t__27!

      when 10
        # at line 1:64: T__28
        t__28!

      when 11
        # at line 1:70: PRENS
        prens!

      when 12
        # at line 1:76: POSTNS
        postns!

      when 13
        # at line 1:83: OP
        op!

      when 14
        # at line 1:86: ID
        id!

      when 15
        # at line 1:89: XML
        xml!

      when 16
        # at line 1:93: DOC
        doc!

      when 17
        # at line 1:97: CDATA
        cdata!

      when 18
        # at line 1:103: STR
        str!

      when 19
        # at line 1:107: COMMENT
        comment!

      when 20
        # at line 1:115: WS
        ws!

      when 21
        # at line 1:118: INT
        int!

      when 22
        # at line 1:122: FLOAT
        float!

      when 23
        # at line 1:128: CHAR
        char!

      end
    end

    
    # - - - - - - - - - - DFA definitions - - - - - - - - - - -
    class DFA2 < ANTLR3::DFA
      EOT = unpack( 1, -1, 1, 17, 1, 19, 1, 21, 4, -1, 1, 23, 1, 25, 2, 
                    -1, 1, 27, 3, -1, 1, 29, 13, -1 )
      EOF = unpack( 30, -1 )
      MIN = unpack( 1, 36, 1, 45, 2, 62, 4, -1, 1, 38, 1, 42, 2, -1, 1, 
                    124, 3, -1, 1, 62, 13, -1 )
      MAX = unpack( 1, 126, 1, 60, 2, 62, 4, -1, 1, 38, 1, 42, 2, -1, 1, 
                    124, 3, -1, 1, 62, 13, -1 )
      ACCEPT = unpack( 4, -1, 1, 8, 1, 9, 1, 10, 1, 11, 2, -1, 1, 17, 1, 
                       18, 1, -1, 1, 21, 1, 22, 1, 2, 1, -1, 1, 1, 1, 5, 
                       1, 16, 1, 6, 1, 7, 1, 13, 1, 12, 1, 15, 1, 14, 1, 
                       20, 1, 19, 1, 4, 1, 3 )
      SPECIAL = unpack( 30, -1 )
      TRANSITION = [
        unpack( 1, 5, 1, 6, 1, 8, 3, -1, 1, 9, 1, 10, 1, -1, 1, 2, 1, -1, 
                1, 13, 12, -1, 1, 1, 1, 11, 1, 3, 1, 14, 30, -1, 1, 7, 29, 
                -1, 1, 12, 1, -1, 1, 4 ),
        unpack( 1, 16, 14, -1, 1, 15 ),
        unpack( 1, 18 ),
        unpack( 1, 20 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 22 ),
        unpack( 1, 24 ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 26 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 28 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  )
      ].freeze
      
      ( 0 ... MIN.length ).zip( MIN, MAX ) do | i, a, z |
        if a > 0 and z < 0
          MAX[ i ] %= 0x10000
        end
      end
      
      @decision = 2
      

      def description
        <<-'__dfa_description__'.strip!
          70:7: ( '<' | '<<' | '<-' | '<->' | '->' | '>>' | '>' | '~' | '$' | '%' | '^' | '&' | '&&' | '*' | '**' | '-' | '+' | '=' | '|' | '||' | '/' | '?' )
        __dfa_description__
      end
    end
    class DFA21 < ANTLR3::DFA
      EOT = unpack( 5, -1 )
      EOF = unpack( 5, -1 )
      MIN = unpack( 2, 46, 3, -1 )
      MAX = unpack( 1, 57, 1, 101, 3, -1 )
      ACCEPT = unpack( 2, -1, 1, 2, 1, 1, 1, 3 )
      SPECIAL = unpack( 5, -1 )
      TRANSITION = [
        unpack( 1, 2, 1, -1, 10, 1 ),
        unpack( 1, 3, 1, -1, 10, 1, 11, -1, 1, 4, 31, -1, 1, 4 ),
        unpack(  ),
        unpack(  ),
        unpack(  )
      ].freeze
      
      ( 0 ... MIN.length ).zip( MIN, MAX ) do | i, a, z |
        if a > 0 and z < 0
          MAX[ i ] %= 0x10000
        end
      end
      
      @decision = 21
      

      def description
        <<-'__dfa_description__'.strip!
          112:1: FLOAT : ( ( '0' .. '9' )+ '.' ( '0' .. '9' )* ( EXPONENT )? | '.' ( '0' .. '9' )+ ( EXPONENT )? | ( '0' .. '9' )+ EXPONENT );
        __dfa_description__
      end
    end
    class DFA25 < ANTLR3::DFA
      EOT = unpack( 1, -1, 1, 22, 2, -1, 1, 24, 4, -1, 1, 26, 1, -1, 1, 
                    12, 3, -1, 2, 14, 4, -1, 1, 31, 10, -1 )
      EOF = unpack( 32, -1 )
      MIN = unpack( 1, 9, 1, 48, 2, -1, 1, 58, 4, -1, 1, 91, 1, -1, 1, 33, 
                    3, -1, 1, 42, 1, 120, 2, -1, 1, 0, 1, -1, 1, 46, 10, 
                    -1 )
      MAX = unpack( 1, 126, 1, 57, 2, -1, 1, 58, 4, -1, 1, 91, 1, -1, 1, 
                    33, 3, -1, 1, 47, 1, 120, 2, -1, 1, -1, 1, -1, 1, 101, 
                    10, -1 )
      ACCEPT = unpack( 2, -1, 1, 2, 1, 3, 1, -1, 1, 5, 1, 6, 1, 7, 1, 8, 
                       1, -1, 1, 10, 1, -1, 1, 11, 1, 12, 1, 13, 2, -1, 
                       1, 14, 1, 18, 1, -1, 1, 20, 1, -1, 1, 1, 1, 22, 1, 
                       4, 1, 17, 1, 9, 1, 16, 1, 19, 1, 15, 1, 23, 1, 21 )
      SPECIAL = unpack( 19, -1, 1, 0, 12, -1 )
      TRANSITION = [
        unpack( 2, 20, 2, -1, 1, 20, 18, -1, 1, 20, 1, 11, 1, 18, 1, 12, 
                3, 14, 1, 19, 1, 7, 1, 8, 2, 14, 1, 6, 1, 14, 1, 1, 1, 15, 
                10, 21, 1, 4, 1, 5, 3, 14, 1, 16, 1, 13, 26, 17, 1, 9, 1, 
                13, 1, 10, 1, 14, 1, 17, 1, -1, 26, 17, 1, 2, 1, 14, 1, 
                3, 1, 14 ),
        unpack( 10, 23 ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 12 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 25 ),
        unpack(  ),
        unpack( 1, 27 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 28, 4, -1, 1, 28 ),
        unpack( 1, 29 ),
        unpack(  ),
        unpack(  ),
        unpack( 39, 30, 1, 18, 65496, 30 ),
        unpack(  ),
        unpack( 1, 23, 1, -1, 10, 21, 11, -1, 1, 23, 31, -1, 1, 23 ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  ),
        unpack(  )
      ].freeze
      
      ( 0 ... MIN.length ).zip( MIN, MAX ) do | i, a, z |
        if a > 0 and z < 0
          MAX[ i ] %= 0x10000
        end
      end
      
      @decision = 25
      

      def description
        <<-'__dfa_description__'.strip!
          1:1: Tokens : ( T__19 | T__20 | T__21 | T__22 | T__23 | T__24 | T__25 | T__26 | T__27 | T__28 | PRENS | POSTNS | OP | ID | XML | DOC | CDATA | STR | COMMENT | WS | INT | FLOAT | CHAR );
        __dfa_description__
      end
    end

    
    private
    
    def initialize_dfas
      super rescue nil
      @dfa2 = DFA2.new( self, 2 )
      @dfa21 = DFA21.new( self, 21 )
      @dfa25 = DFA25.new( self, 25 ) do |s|
        case s
        when 0
          look_25_19 = @input.peek
          s = -1
          if ( look_25_19 == 0x27 )
            s = 18
          elsif ( look_25_19.between?( 0x0, 0x26 ) || look_25_19.between?( 0x28, 0xffff ) )
            s = 30
          end

        end
        
        if s < 0
          nva = ANTLR3::Error::NoViableAlternative.new( @dfa25.description, 25, s, input )
          @dfa25.error( nva )
          raise nva
        end
        
        s
      end

    end
  end # class Lexer < ANTLR3::Lexer

  at_exit { Lexer.main( ARGV ) } if __FILE__ == $0
end

