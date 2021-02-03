var obj = { a: source("a"), b: source("b1") };
sink(obj["a"]); // NOT OK

const { Map } = require('immutable');

const map1 = Map(obj);

sink(map1.get("b")); // NOT OK

const map2 = map1.set('c', "safe");
sink(map1.get("a")); // NOT OK
sink(map2.get("a")); // NOT OK
sink(map2.get("b")); // OK - but still flagged [INCONSISTENCY]


