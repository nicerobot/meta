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

    # register the proper human-readable name or literal value
    # for each token type
    #
    # this is necessary because anonymous tokens, which are
    # created from literal values in the grammar, do not
    # have descriptive names
    register_names( "DOC", "XML", "CDATA", "OP", "PRENS", "ID", "POSTNS", 
                    "STR", "INT", "FLOAT", "CHAR", "COMMENT", "WS", "EXPONENT", 
                    "HEX_DIGIT", "'.'", "'{'", "'}'", "':'", "';'", "','", 
                    "'('", "')'", "'['", "']'" )
    
  end


  class Parser < ANTLR3::Parser
    @grammar_home = StruxtRuby

    RULE_METHODS = [ :struxt, :xmldecl, :node, :tag, :children, :childs, 
                     :attribute, :name, :ns, :value, :attributes ].freeze


    include TokenData

    begin
      generated_using( "/Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g", "3.3 Nov 30, 2010 12:45:30", "1.8.1" )
    rescue NoMethodError => error
      # ignore
    end

    def initialize( input, options = {} )
      super( input, options )


    end
    # - - - - - - - - - - - - Rules - - - - - - - - - - - - -

    # 
    # parser rule struxt
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 7:1: struxt returns [StruxtRubyParser self] : (xml= xmldecl )? (doctype= DOC )? node EOF ;
    # 
    def struxt
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 1 )
      self = nil
      doctype = nil

      begin
        # at line 8:7: (xml= xmldecl )? (doctype= DOC )? node EOF
        # at line 8:10: (xml= xmldecl )?
        alt_1 = 2
        look_1_0 = @input.peek( 1 )

        if ( look_1_0 == XML )
          alt_1 = 1
        end
        case alt_1
        when 1
          # at line 8:10: xml= xmldecl
          @state.following.push( TOKENS_FOLLOWING_xmldecl_IN_struxt_32 )
          xmldecl
          @state.following.pop

        end
        # at line 9:14: (doctype= DOC )?
        alt_2 = 2
        look_2_0 = @input.peek( 1 )

        if ( look_2_0 == DOC )
          alt_2 = 1
        end
        case alt_2
        when 1
          # at line 9:14: doctype= DOC
          doctype = match( DOC, TOKENS_FOLLOWING_DOC_IN_struxt_43 )

        end
        @state.following.push( TOKENS_FOLLOWING_node_IN_struxt_52 )
        node
        @state.following.pop
        match( EOF, TOKENS_FOLLOWING_EOF_IN_struxt_54 )

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 1 )

      end
      
      return self
    end


    # 
    # parser rule xmldecl
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 13:1: xmldecl : XML attributes '.' ;
    # 
    def xmldecl
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 2 )

      begin
        # at line 14:7: XML attributes '.'
        match( XML, TOKENS_FOLLOWING_XML_IN_xmldecl_71 )
        @state.following.push( TOKENS_FOLLOWING_attributes_IN_xmldecl_73 )
        attributes
        @state.following.pop
        match( T__19, TOKENS_FOLLOWING_T__19_IN_xmldecl_75 )

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 2 )

      end
      
      return 
    end


    # 
    # parser rule node
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 17:1: node : ( tag children | text= value | cdata= CDATA );
    # 
    def node
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 3 )
      cdata = nil
      text = nil

      begin
        # at line 18:5: ( tag children | text= value | cdata= CDATA )
        alt_3 = 3
        case look_3 = @input.peek( 1 )
        when ID then alt_3 = 1
        when STR, INT, FLOAT, CHAR then alt_3 = 2
        when CDATA then alt_3 = 3
        else
          raise NoViableAlternative( "", 3, 0 )
        end
        case alt_3
        when 1
          # at line 18:7: tag children
          @state.following.push( TOKENS_FOLLOWING_tag_IN_node_92 )
          tag
          @state.following.pop
          @state.following.push( TOKENS_FOLLOWING_children_IN_node_94 )
          children
          @state.following.pop

        when 2
          # at line 19:7: text= value
          @state.following.push( TOKENS_FOLLOWING_value_IN_node_104 )
          text = value
          @state.following.pop

        when 3
          # at line 20:7: cdata= CDATA
          cdata = match( CDATA, TOKENS_FOLLOWING_CDATA_IN_node_114 )

        end
      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 3 )

      end
      
      return 
    end


    # 
    # parser rule tag
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 23:1: tag : n= name ( attributes )? ;
    # 
    def tag
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 4 )
      n = nil

      begin
        # at line 24:7: n= name ( attributes )?
        @state.following.push( TOKENS_FOLLOWING_name_IN_tag_133 )
        n = name
        @state.following.pop
        # at line 24:14: ( attributes )?
        alt_4 = 2
        look_4_0 = @input.peek( 1 )

        if ( look_4_0 == OP || look_4_0 == ID || look_4_0.between?( STR, CHAR ) || look_4_0 == T__25 || look_4_0 == T__27 )
          alt_4 = 1
        end
        case alt_4
        when 1
          # at line 24:14: attributes
          @state.following.push( TOKENS_FOLLOWING_attributes_IN_tag_135 )
          attributes
          @state.following.pop

        end

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 4 )

      end
      
      return 
    end


    # 
    # parser rule children
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 27:10: fragment children : ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) );
    # 
    def children
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 5 )

      begin
        # at line 28:5: ( '{' childs '}' | ( ':' ( node )* )? ( '.' | ';' | EOF ) )
        alt_7 = 2
        look_7_0 = @input.peek( 1 )

        if ( look_7_0 == T__20 )
          alt_7 = 1
        elsif ( look_7_0 == EOF || look_7_0 == T__19 || look_7_0.between?( T__22, T__23 ) )
          alt_7 = 2
        else
          raise NoViableAlternative( "", 7, 0 )
        end
        case alt_7
        when 1
          # at line 28:7: '{' childs '}'
          match( T__20, TOKENS_FOLLOWING_T__20_IN_children_154 )
          @state.following.push( TOKENS_FOLLOWING_childs_IN_children_156 )
          childs
          @state.following.pop
          match( T__21, TOKENS_FOLLOWING_T__21_IN_children_158 )

        when 2
          # at line 29:7: ( ':' ( node )* )? ( '.' | ';' | EOF )
          # at line 29:7: ( ':' ( node )* )?
          alt_6 = 2
          look_6_0 = @input.peek( 1 )

          if ( look_6_0 == T__22 )
            alt_6 = 1
          end
          case alt_6
          when 1
            # at line 29:8: ':' ( node )*
            match( T__22, TOKENS_FOLLOWING_T__22_IN_children_167 )
            # at line 29:12: ( node )*
            while true # decision 5
              alt_5 = 2
              look_5_0 = @input.peek( 1 )

              if ( look_5_0 == CDATA || look_5_0 == ID || look_5_0.between?( STR, CHAR ) )
                alt_5 = 1

              end
              case alt_5
              when 1
                # at line 29:12: node
                @state.following.push( TOKENS_FOLLOWING_node_IN_children_169 )
                node
                @state.following.pop

              else
                break # out of loop for decision 5
              end
            end # loop for decision 5

          end
          if @input.peek(1) == EOF || @input.peek(1) == T__19 || @input.peek(1) == T__23
            @input.consume
            @state.error_recovery = false
          else
            mse = MismatchedSet( nil )
            raise mse
          end



        end
      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 5 )

      end
      
      return 
    end

    fragment :children rescue nil


    # 
    # parser rule childs
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 32:10: fragment childs : ( node )* (nodename= tag )? ;
    # 
    def childs
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 6 )

      begin
        # at line 33:7: ( node )* (nodename= tag )?
        # at line 33:7: ( node )*
        while true # decision 8
          alt_8 = 2
          alt_8 = @dfa8.predict( @input )
          case alt_8
          when 1
            # at line 33:7: node
            @state.following.push( TOKENS_FOLLOWING_node_IN_childs_199 )
            node
            @state.following.pop

          else
            break # out of loop for decision 8
          end
        end # loop for decision 8
        # at line 33:21: (nodename= tag )?
        alt_9 = 2
        look_9_0 = @input.peek( 1 )

        if ( look_9_0 == ID )
          alt_9 = 1
        end
        case alt_9
        when 1
          # at line 33:21: nodename= tag
          @state.following.push( TOKENS_FOLLOWING_tag_IN_childs_204 )
          tag
          @state.following.pop

        end

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 6 )

      end
      
      return 
    end

    fragment :childs rescue nil


    # 
    # parser rule attribute
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );
    # 
    def attribute
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 7 )
      o = nil
      n = nil
      v = nil
      n1 = nil

      begin
        # at line 37:5: (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) )
        alt_15 = 4
        alt_15 = @dfa15.predict( @input )
        case alt_15
        when 1
          # at line 37:7: n= name (o= OP )? (v= value )?
          @state.following.push( TOKENS_FOLLOWING_name_IN_attribute_226 )
          n = name
          @state.following.pop
          # at line 37:15: (o= OP )?
          alt_10 = 2
          look_10_0 = @input.peek( 1 )

          if ( look_10_0 == OP )
            alt_10 = 1
          end
          case alt_10
          when 1
            # at line 37:15: o= OP
            o = match( OP, TOKENS_FOLLOWING_OP_IN_attribute_230 )

          end
          # at line 37:21: (v= value )?
          alt_11 = 2
          look_11_0 = @input.peek( 1 )

          if ( look_11_0.between?( STR, CHAR ) )
            alt_11 = 1
          end
          case alt_11
          when 1
            # at line 37:21: v= value
            @state.following.push( TOKENS_FOLLOWING_value_IN_attribute_235 )
            v = value
            @state.following.pop

          end

        when 2
          # at line 38:7: v= value (o= OP )? (n= name )?
          @state.following.push( TOKENS_FOLLOWING_value_IN_attribute_246 )
          v = value
          @state.following.pop
          # at line 38:16: (o= OP )?
          alt_12 = 2
          look_12_0 = @input.peek( 1 )

          if ( look_12_0 == OP )
            alt_12 = 1
          end
          case alt_12
          when 1
            # at line 38:16: o= OP
            o = match( OP, TOKENS_FOLLOWING_OP_IN_attribute_250 )

          end
          # at line 38:22: (n= name )?
          alt_13 = 2
          look_13_0 = @input.peek( 1 )

          if ( look_13_0 == ID )
            alt_13 = 1
          end
          case alt_13
          when 1
            # at line 38:22: n= name
            @state.following.push( TOKENS_FOLLOWING_name_IN_attribute_255 )
            n = name
            @state.following.pop

          end

        when 3
          # at line 39:7: n= name o= OP n1= name
          @state.following.push( TOKENS_FOLLOWING_name_IN_attribute_266 )
          n = name
          @state.following.pop
          o = match( OP, TOKENS_FOLLOWING_OP_IN_attribute_270 )
          @state.following.push( TOKENS_FOLLOWING_name_IN_attribute_274 )
          n1 = name
          @state.following.pop

        when 4
          # at line 40:7: o= OP (n= name | v= value )
          o = match( OP, TOKENS_FOLLOWING_OP_IN_attribute_284 )
          # at line 40:12: (n= name | v= value )
          alt_14 = 2
          look_14_0 = @input.peek( 1 )

          if ( look_14_0 == ID )
            alt_14 = 1
          elsif ( look_14_0.between?( STR, CHAR ) )
            alt_14 = 2
          else
            raise NoViableAlternative( "", 14, 0 )
          end
          case alt_14
          when 1
            # at line 40:13: n= name
            @state.following.push( TOKENS_FOLLOWING_name_IN_attribute_289 )
            n = name
            @state.following.pop

          when 2
            # at line 40:20: v= value
            @state.following.push( TOKENS_FOLLOWING_value_IN_attribute_293 )
            v = value
            @state.following.pop

          end

        end
      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 7 )

      end
      
      return 
    end

    fragment :attribute rescue nil

    NameReturnValue = define_return_scope :Token namespace, :Token nodename

    # 
    # parser rule name
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 43:10: fragment name returns [Token namespace, Token nodename] : (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? ) ;
    # 
    def name
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 8 )
      return_value = NameReturnValue.new

      # $rule.start = the first token seen before matching
      return_value.start = @input.look
      n = nil
      s = nil

      begin
        # at line 44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
        # at line 44:7: (s= ns PRENS n= ID | n= ID ( POSTNS s= ns )? )
        alt_17 = 2
        look_17_0 = @input.peek( 1 )

        if ( look_17_0 == ID )
          look_17_1 = @input.peek( 2 )

          if ( look_17_1 == PRENS )
            alt_17 = 1
          elsif ( look_17_1 == OP || look_17_1.between?( ID, CHAR ) || look_17_1.between?( T__19, T__28 ) )
            alt_17 = 2
          else
            raise NoViableAlternative( "", 17, 1 )
          end
        else
          raise NoViableAlternative( "", 17, 0 )
        end
        case alt_17
        when 1
          # at line 44:8: s= ns PRENS n= ID
          @state.following.push( TOKENS_FOLLOWING_ns_IN_name_320 )
          s = ns
          @state.following.pop
          match( PRENS, TOKENS_FOLLOWING_PRENS_IN_name_322 )
          n = match( ID, TOKENS_FOLLOWING_ID_IN_name_326 )

        when 2
          # at line 44:26: n= ID ( POSTNS s= ns )?
          n = match( ID, TOKENS_FOLLOWING_ID_IN_name_332 )
          # at line 44:31: ( POSTNS s= ns )?
          alt_16 = 2
          look_16_0 = @input.peek( 1 )

          if ( look_16_0 == POSTNS )
            alt_16 = 1
          end
          case alt_16
          when 1
            # at line 44:33: POSTNS s= ns
            match( POSTNS, TOKENS_FOLLOWING_POSTNS_IN_name_336 )
            @state.following.push( TOKENS_FOLLOWING_ns_IN_name_340 )
            s = ns
            @state.following.pop

          end

        end
        # - - - - - - - rule clean up - - - - - - - -
        return_value.stop = @input.look( -1 )

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 8 )

      end
      
      return return_value
    end

    fragment :name rescue nil


    # 
    # parser rule ns
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 47:10: fragment ns returns [Token namespace] : s= ID ;
    # 
    def ns
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 9 )
      namespace = nil
      s = nil

      begin
        # at line 48:7: s= ID
        s = match( ID, TOKENS_FOLLOWING_ID_IN_ns_368 )

      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 9 )

      end
      
      return namespace
    end

    fragment :ns rescue nil


    # 
    # parser rule value
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 51:10: fragment value returns [String s] : v= ( STR | INT | FLOAT | CHAR ) ;
    # 
    def value
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 10 )
      s = nil
      v = nil

      begin
        # at line 52:7: v= ( STR | INT | FLOAT | CHAR )
        v = @input.look
        if @input.peek( 1 ).between?( STR, CHAR )
          @input.consume
          @state.error_recovery = false
        else
          mse = MismatchedSet( nil )
          raise mse
        end



      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 10 )

      end
      
      return s
    end

    fragment :value rescue nil


    # 
    # parser rule attributes
    # 
    # (in /Users/rnix/Projects/github.com/text-plain/struxt/struxt.parsers/src/main/antlr/StruxtRuby.g)
    # 55:10: fragment attributes : ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' );
    # 
    def attributes
      # -> uncomment the next line to manually enable rule tracing
      # trace_in( __method__, 11 )

      begin
        # at line 56:5: ( attribute ( ',' attribute )* | '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')' | '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']' )
        alt_21 = 3
        case look_21 = @input.peek( 1 )
        when OP, ID, STR, INT, FLOAT, CHAR then alt_21 = 1
        when T__25 then alt_21 = 2
        when T__27 then alt_21 = 3
        else
          raise NoViableAlternative( "", 21, 0 )
        end
        case alt_21
        when 1
          # at line 56:7: attribute ( ',' attribute )*
          @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_426 )
          attribute
          @state.following.pop
          # at line 56:17: ( ',' attribute )*
          while true # decision 18
            alt_18 = 2
            look_18_0 = @input.peek( 1 )

            if ( look_18_0 == T__24 )
              alt_18 = 1

            end
            case alt_18
            when 1
              # at line 56:19: ',' attribute
              match( T__24, TOKENS_FOLLOWING_T__24_IN_attributes_430 )
              @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_432 )
              attribute
              @state.following.pop

            else
              break # out of loop for decision 18
            end
          end # loop for decision 18

        when 2
          # at line 57:7: '(' attribute ( ( ',' | ';' | '.' ) attribute )* ')'
          match( T__25, TOKENS_FOLLOWING_T__25_IN_attributes_442 )
          @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_444 )
          attribute
          @state.following.pop
          # at line 57:21: ( ( ',' | ';' | '.' ) attribute )*
          while true # decision 19
            alt_19 = 2
            look_19_0 = @input.peek( 1 )

            if ( look_19_0 == T__19 || look_19_0.between?( T__23, T__24 ) )
              alt_19 = 1

            end
            case alt_19
            when 1
              # at line 57:23: ( ',' | ';' | '.' ) attribute
              if @input.peek(1) == T__19 || @input.peek( 1 ).between?( T__23, T__24 )
                @input.consume
                @state.error_recovery = false
              else
                mse = MismatchedSet( nil )
                raise mse
              end


              @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_456 )
              attribute
              @state.following.pop

            else
              break # out of loop for decision 19
            end
          end # loop for decision 19
          match( T__26, TOKENS_FOLLOWING_T__26_IN_attributes_460 )

        when 3
          # at line 58:7: '[' attribute ( ( ',' | ';' | '.' ) attribute )* ']'
          match( T__27, TOKENS_FOLLOWING_T__27_IN_attributes_468 )
          @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_470 )
          attribute
          @state.following.pop
          # at line 58:21: ( ( ',' | ';' | '.' ) attribute )*
          while true # decision 20
            alt_20 = 2
            look_20_0 = @input.peek( 1 )

            if ( look_20_0 == T__19 || look_20_0.between?( T__23, T__24 ) )
              alt_20 = 1

            end
            case alt_20
            when 1
              # at line 58:23: ( ',' | ';' | '.' ) attribute
              if @input.peek(1) == T__19 || @input.peek( 1 ).between?( T__23, T__24 )
                @input.consume
                @state.error_recovery = false
              else
                mse = MismatchedSet( nil )
                raise mse
              end


              @state.following.push( TOKENS_FOLLOWING_attribute_IN_attributes_482 )
              attribute
              @state.following.pop

            else
              break # out of loop for decision 20
            end
          end # loop for decision 20
          match( T__28, TOKENS_FOLLOWING_T__28_IN_attributes_486 )

        end
      rescue ANTLR3::Error::RecognitionError => re
        report_error(re)
        recover(re)

      ensure
        # -> uncomment the next line to manually enable rule tracing
        # trace_out( __method__, 11 )

      end
      
      return 
    end

    fragment :attributes rescue nil



    # - - - - - - - - - - DFA definitions - - - - - - - - - - -
    class DFA8 < ANTLR3::DFA
      EOT = unpack( 171, -1 )
      EOF = unpack( 1, -1, 1, 3, 4, -1, 2, 3, 3, -1, 2, 3, 2, -1, 2, 3, 
                    1, -1, 4, 3, 6, -1, 5, 3, 10, -1, 1, 3, 9, -1, 1, 3, 
                    8, -1, 10, 3, 20, -1, 5, 3, 34, -1, 4, 3, 18, -1, 2, 
                    3, 16, -1 )
      MIN = unpack( 1, 6, 1, 7, 2, -1, 2, 9, 2, 7, 1, 9, 4, 7, 3, 9, 1, 
                    19, 1, 7, 1, 9, 2, 8, 1, 19, 2, 7, 1, 9, 2, 7, 1, 9, 
                    2, 7, 1, 8, 2, 7, 8, 9, 1, 19, 1, 7, 1, 19, 1, 9, 2, 
                    8, 1, 19, 3, 9, 1, 19, 1, 7, 1, 19, 1, 9, 2, 8, 1, 19, 
                    5, 9, 1, 19, 1, 9, 2, 8, 5, 19, 2, 7, 1, 8, 2, 7, 5, 
                    9, 2, 7, 1, 8, 2, 7, 5, 9, 2, 19, 2, 7, 1, 8, 9, 9, 
                    1, 19, 1, 9, 2, 8, 5, 19, 5, 9, 1, 19, 1, 9, 2, 8, 5, 
                    19, 2, 9, 6, 19, 2, 7, 1, 8, 4, 9, 2, 19, 2, 7, 1, 8, 
                    4, 9, 2, 19, 2, 9, 4, 19, 2, 9, 8, 19 )
      MAX = unpack( 1, 21, 1, 27, 2, -1, 2, 9, 2, 24, 3, 14, 2, 27, 2, 9, 
                    2, 24, 1, 14, 4, 24, 2, 26, 1, 14, 2, 28, 1, 14, 5, 
                    24, 1, 14, 6, 9, 2, 26, 1, 14, 1, 23, 4, 26, 2, 9, 2, 
                    28, 1, 14, 1, 23, 4, 28, 4, 9, 10, 24, 5, 26, 1, 14, 
                    4, 9, 5, 28, 1, 14, 4, 9, 5, 24, 8, 9, 10, 26, 4, 9, 
                    10, 28, 2, 9, 4, 24, 5, 26, 4, 9, 5, 28, 4, 9, 2, 24, 
                    2, 9, 4, 26, 2, 9, 4, 28, 2, 26, 2, 28 )
      ACCEPT = unpack( 2, -1, 1, 2, 1, 1, 167, -1 )
      SPECIAL = unpack( 171, -1 )
      TRANSITION = [
        unpack( 1, 3, 2, -1, 1, 1, 1, -1, 4, 3, 6, -1, 1, 2 ),
        unpack( 1, 8, 1, 4, 1, 6, 1, 5, 4, 7, 4, -1, 2, 3, 1, 2, 2, 3, 
                 1, -1, 1, 9, 1, -1, 1, 10 ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 11 ),
        unpack( 1, 12 ),
        unpack( 1, 15, 1, 13, 1, -1, 1, 14, 4, 16, 4, -1, 2, 3, 1, 2, 2, 
                 3, 1, 17 ),
        unpack( 1, 18, 1, -1, 1, 19, 9, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 20, 1, -1, 4, 21 ),
        unpack( 1, 24, 1, -1, 1, 22, 1, -1, 4, 23 ),
        unpack( 1, 27, 1, -1, 1, 25, 1, -1, 4, 26 ),
        unpack( 1, 8, 1, -1, 1, 6, 1, -1, 4, 7, 4, -1, 2, 3, 1, 2, 2, 3, 
                 1, -1, 1, 9, 1, -1, 1, 10 ),
        unpack( 1, 8, 1, -1, 1, 6, 1, -1, 4, 7, 4, -1, 2, 3, 1, 2, 2, 3, 
                 1, -1, 1, 9, 1, -1, 1, 10 ),
        unpack( 1, 28 ),
        unpack( 1, 29 ),
        unpack( 1, 30, 1, -1, 4, 16, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 33, 1, -1, 1, 31, 1, -1, 4, 32 ),
        unpack( 1, 19, 9, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 34, 1, -1, 1, 35, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 36, 1, -1, 1, 37, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 40, 1, 38, 1, -1, 1, 39, 4, 41, 4, -1, 1, 42, 3, -1, 
                 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 44, 1, -1, 1, 45, 9, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 46, 1, -1, 4, 47 ),
        unpack( 1, 50, 1, 48, 1, -1, 1, 49, 4, 51, 4, -1, 1, 52, 3, -1, 
                 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 54, 1, -1, 1, 55, 9, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 56, 1, -1, 4, 57 ),
        unpack( 1, 15, 3, -1, 4, 16, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 15, 3, -1, 4, 16, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 58, 1, -1, 1, 59, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 62, 1, 60, 1, -1, 1, 61, 4, 63, 4, -1, 2, 3, 1, 2, 2, 
                 3, 1, 17 ),
        unpack( 1, 64, 1, -1, 1, 65, 9, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 66, 1, -1, 4, 67 ),
        unpack( 1, 68 ),
        unpack( 1, 69 ),
        unpack( 1, 70 ),
        unpack( 1, 71 ),
        unpack( 1, 72 ),
        unpack( 1, 73 ),
        unpack( 1, 74, 1, -1, 4, 41, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 77, 1, -1, 1, 75, 1, -1, 4, 76 ),
        unpack( 2, 3, 1, 2, 2, 3 ),
        unpack( 1, 45, 9, -1, 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 78, 1, -1, 1, 79, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 80, 1, -1, 1, 81, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 82 ),
        unpack( 1, 83 ),
        unpack( 1, 84, 1, -1, 4, 51, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 87, 1, -1, 1, 85, 1, -1, 4, 86 ),
        unpack( 2, 3, 1, 2, 2, 3 ),
        unpack( 1, 55, 9, -1, 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 88, 1, -1, 1, 89, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 90, 1, -1, 1, 91, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 92 ),
        unpack( 1, 93 ),
        unpack( 1, 94 ),
        unpack( 1, 95 ),
        unpack( 1, 96, 1, -1, 4, 63, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 65, 9, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 97, 1, -1, 1, 98, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 99, 1, -1, 1, 100, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 40, 3, -1, 4, 41, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 40, 3, -1, 4, 41, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 101, 1, -1, 1, 102, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 105, 1, 103, 1, -1, 1, 104, 4, 106, 4, -1, 1, 42, 3, 
                 -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 107, 1, -1, 1, 108, 9, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 109, 1, -1, 4, 110 ),
        unpack( 1, 111 ),
        unpack( 1, 112 ),
        unpack( 1, 113 ),
        unpack( 1, 114 ),
        unpack( 1, 50, 3, -1, 4, 51, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 50, 3, -1, 4, 51, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 115, 1, -1, 1, 116, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 119, 1, 117, 1, -1, 1, 118, 4, 120, 4, -1, 1, 52, 3, 
                 -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 121, 1, -1, 1, 122, 9, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 123, 1, -1, 4, 124 ),
        unpack( 1, 125 ),
        unpack( 1, 126 ),
        unpack( 1, 127 ),
        unpack( 1, 128 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 62, 3, -1, 4, 63, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 62, 3, -1, 4, 63, 4, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 129, 1, -1, 1, 130, 8, -1, 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 131 ),
        unpack( 1, 132 ),
        unpack( 1, 133 ),
        unpack( 1, 134 ),
        unpack( 1, 135 ),
        unpack( 1, 136 ),
        unpack( 1, 137 ),
        unpack( 1, 138 ),
        unpack( 1, 139, 1, -1, 4, 106, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 108, 9, -1, 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 140, 1, -1, 1, 141, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 142, 1, -1, 1, 143, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 144 ),
        unpack( 1, 145 ),
        unpack( 1, 146 ),
        unpack( 1, 147 ),
        unpack( 1, 148, 1, -1, 4, 120, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 122, 9, -1, 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 149, 1, -1, 1, 150, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 151, 1, -1, 1, 152, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 153 ),
        unpack( 1, 154 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 105, 3, -1, 4, 106, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 105, 3, -1, 4, 106, 4, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 155, 1, -1, 1, 156, 8, -1, 1, 42, 3, -1, 2, 42, 1, -1, 
                 1, 43 ),
        unpack( 1, 157 ),
        unpack( 1, 158 ),
        unpack( 1, 159 ),
        unpack( 1, 160 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 119, 3, -1, 4, 120, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 119, 3, -1, 4, 120, 4, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 161, 1, -1, 1, 162, 8, -1, 1, 52, 3, -1, 2, 52, 3, -1, 
                 1, 53 ),
        unpack( 1, 163 ),
        unpack( 1, 164 ),
        unpack( 1, 165 ),
        unpack( 1, 166 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 2, 3, 1, 2, 2, 3, 1, 17 ),
        unpack( 1, 167 ),
        unpack( 1, 168 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 169 ),
        unpack( 1, 170 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 42, 3, -1, 2, 42, 1, -1, 1, 43 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 ),
        unpack( 1, 52, 3, -1, 2, 52, 3, -1, 1, 53 )
      ].freeze
      
      ( 0 ... MIN.length ).zip( MIN, MAX ) do | i, a, z |
        if a > 0 and z < 0
          MAX[ i ] %= 0x10000
        end
      end
      
      @decision = 8
      

      def description
        <<-'__dfa_description__'.strip!
          ()* loopback of 33:7: ( node )*
        __dfa_description__
      end
    end
    class DFA15 < ANTLR3::DFA
      EOT = unpack( 11, -1 )
      EOF = unpack( 11, -1 )
      MIN = unpack( 2, 7, 2, -1, 3, 9, 1, -1, 2, 7, 1, -1 )
      MAX = unpack( 1, 14, 1, 28, 2, -1, 2, 9, 1, 28, 1, -1, 2, 28, 1, -1 )
      ACCEPT = unpack( 2, -1, 1, 2, 1, 4, 3, -1, 1, 1, 2, -1, 1, 3 )
      SPECIAL = unpack( 11, -1 )
      TRANSITION = [
        unpack( 1, 3, 1, -1, 1, 1, 1, -1, 4, 2 ),
        unpack( 1, 6, 1, 4, 1, -1, 1, 5, 4, 7, 4, -1, 6, 7, 1, -1, 1, 7, 
                 1, -1, 1, 7 ),
        unpack(  ),
        unpack(  ),
        unpack( 1, 8 ),
        unpack( 1, 9 ),
        unpack( 1, 10, 1, -1, 4, 7, 4, -1, 6, 7, 1, -1, 1, 7, 1, -1, 1, 
                 7 ),
        unpack(  ),
        unpack( 1, 6, 3, -1, 4, 7, 4, -1, 6, 7, 1, -1, 1, 7, 1, -1, 1, 
                 7 ),
        unpack( 1, 6, 3, -1, 4, 7, 4, -1, 6, 7, 1, -1, 1, 7, 1, -1, 1, 
                 7 ),
        unpack(  )
      ].freeze
      
      ( 0 ... MIN.length ).zip( MIN, MAX ) do | i, a, z |
        if a > 0 and z < 0
          MAX[ i ] %= 0x10000
        end
      end
      
      @decision = 15
      

      def description
        <<-'__dfa_description__'.strip!
          36:10: fragment attribute : (n= name (o= OP )? (v= value )? | v= value (o= OP )? (n= name )? | n= name o= OP n1= name | o= OP (n= name | v= value ) );
        __dfa_description__
      end
    end


    private

    def initialize_dfas
      super rescue nil
      @dfa8 = DFA8.new( self, 8 )
      @dfa15 = DFA15.new( self, 15 )

    end
    TOKENS_FOLLOWING_xmldecl_IN_struxt_32 = Set[ 4, 6, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_DOC_IN_struxt_43 = Set[ 4, 6, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_node_IN_struxt_52 = Set[  ]
    TOKENS_FOLLOWING_EOF_IN_struxt_54 = Set[ 1 ]
    TOKENS_FOLLOWING_XML_IN_xmldecl_71 = Set[ 7, 9, 11, 12, 13, 14, 25, 27 ]
    TOKENS_FOLLOWING_attributes_IN_xmldecl_73 = Set[ 19 ]
    TOKENS_FOLLOWING_T__19_IN_xmldecl_75 = Set[ 1 ]
    TOKENS_FOLLOWING_tag_IN_node_92 = Set[ 19, 20, 22, 23 ]
    TOKENS_FOLLOWING_children_IN_node_94 = Set[ 1 ]
    TOKENS_FOLLOWING_value_IN_node_104 = Set[ 1 ]
    TOKENS_FOLLOWING_CDATA_IN_node_114 = Set[ 1 ]
    TOKENS_FOLLOWING_name_IN_tag_133 = Set[ 1, 7, 9, 11, 12, 13, 14, 25, 27 ]
    TOKENS_FOLLOWING_attributes_IN_tag_135 = Set[ 1 ]
    TOKENS_FOLLOWING_T__20_IN_children_154 = Set[ 4, 6, 9, 11, 12, 13, 14, 21 ]
    TOKENS_FOLLOWING_childs_IN_children_156 = Set[ 21 ]
    TOKENS_FOLLOWING_T__21_IN_children_158 = Set[ 1 ]
    TOKENS_FOLLOWING_T__22_IN_children_167 = Set[ 4, 6, 9, 11, 12, 13, 14, 19, 23 ]
    TOKENS_FOLLOWING_node_IN_children_169 = Set[ 4, 6, 9, 11, 12, 13, 14, 19, 23 ]
    TOKENS_FOLLOWING_set_IN_children_174 = Set[ 1 ]
    TOKENS_FOLLOWING_node_IN_childs_199 = Set[ 1, 4, 6, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_tag_IN_childs_204 = Set[ 1 ]
    TOKENS_FOLLOWING_name_IN_attribute_226 = Set[ 1, 7, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_OP_IN_attribute_230 = Set[ 1, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_value_IN_attribute_235 = Set[ 1 ]
    TOKENS_FOLLOWING_value_IN_attribute_246 = Set[ 1, 7, 9 ]
    TOKENS_FOLLOWING_OP_IN_attribute_250 = Set[ 1, 9 ]
    TOKENS_FOLLOWING_name_IN_attribute_255 = Set[ 1 ]
    TOKENS_FOLLOWING_name_IN_attribute_266 = Set[ 7 ]
    TOKENS_FOLLOWING_OP_IN_attribute_270 = Set[ 9 ]
    TOKENS_FOLLOWING_name_IN_attribute_274 = Set[ 1 ]
    TOKENS_FOLLOWING_OP_IN_attribute_284 = Set[ 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_name_IN_attribute_289 = Set[ 1 ]
    TOKENS_FOLLOWING_value_IN_attribute_293 = Set[ 1 ]
    TOKENS_FOLLOWING_ns_IN_name_320 = Set[ 8 ]
    TOKENS_FOLLOWING_PRENS_IN_name_322 = Set[ 9 ]
    TOKENS_FOLLOWING_ID_IN_name_326 = Set[ 1 ]
    TOKENS_FOLLOWING_ID_IN_name_332 = Set[ 1, 10 ]
    TOKENS_FOLLOWING_POSTNS_IN_name_336 = Set[ 9 ]
    TOKENS_FOLLOWING_ns_IN_name_340 = Set[ 1 ]
    TOKENS_FOLLOWING_ID_IN_ns_368 = Set[ 1 ]
    TOKENS_FOLLOWING_set_IN_value_393 = Set[ 1 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_426 = Set[ 1, 24 ]
    TOKENS_FOLLOWING_T__24_IN_attributes_430 = Set[ 7, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_432 = Set[ 1, 24 ]
    TOKENS_FOLLOWING_T__25_IN_attributes_442 = Set[ 7, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_444 = Set[ 19, 23, 24, 26 ]
    TOKENS_FOLLOWING_set_IN_attributes_448 = Set[ 7, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_456 = Set[ 19, 23, 24, 26 ]
    TOKENS_FOLLOWING_T__26_IN_attributes_460 = Set[ 1 ]
    TOKENS_FOLLOWING_T__27_IN_attributes_468 = Set[ 7, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_470 = Set[ 19, 23, 24, 28 ]
    TOKENS_FOLLOWING_set_IN_attributes_474 = Set[ 7, 9, 11, 12, 13, 14 ]
    TOKENS_FOLLOWING_attribute_IN_attributes_482 = Set[ 19, 23, 24, 28 ]
    TOKENS_FOLLOWING_T__28_IN_attributes_486 = Set[ 1 ]

  end # class Parser < ANTLR3::Parser

  at_exit { Parser.main( ARGV ) } if __FILE__ == $0
end

