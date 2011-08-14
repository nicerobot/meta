all: gonode.6 test struxt
	@./test

struxt.go: struxt.y
	$(HOME)/Development/goll1e/goll1e struxt.y > struxt.go
  
struxt: struxt.peg.6
	6l -o $@ $<

test: test.6
	@6l -o $@ $<

%.peg.go: %.peg
	peg $^

%.6: %.go
	6g $^

clean:
	@rm -f *.6 test struxt.go *.peg.go 6.out struxt
