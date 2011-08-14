http://www.eclipse.org/Xtext/

- define xmlns standard for specifying modules in text-plain lang:
  i.e. txp can import modules using xmlns. it needs to be able to define version requirements: module and runtime.
       metal@xmlns "http://xmtl.org/latest/"
    or 
       metal@xmlns "http://xmtl.org/20110607/"
    
    when verifying the namespace, the runtime version is provided to ensure minimum requirements are met.
