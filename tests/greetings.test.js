describe('Testing my Greetings engine', function(){
  it('Takes user name you entered and in return responds greeting and name (hello, Mike)', function(){
    var greeter = Greeting();
    greeter.name('Mike');
    assert.deepEqual(greeter.userName(), 'Mike');
  })

  it('Checks and returns the language (isixhosa)', function(){
    var greeter = Greeting();
    greeter.language('isixhosa');
    assert.deepEqual(greeter.userLang(), 'isixhosa');
  })

  it('Sets a name you entered, adds it to a map and returns the map', function(){
    var greeter = Greeting();
    greeter.name('Lee');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Lee:0});
  })

  it('takes all the names and returnes it to map, map the returns the count (3)', function(){
    var greeter = Greeting();
    greeter.name('Candice');
    greeter.mapNames();
    greeter.name('Tas');
    greeter.mapNames();
    greeter.name('Ruth');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Candice:0, Tas:0, Ruth:0});
  })

  it('Sets a name twice to test if the map takes reduntant data and returns the map', function(){
    var greeter = Greeting();
    greeter.name('Tas');
    greeter.mapNames();
    // Luvuyo is punched in twice in this test
    greeter.name('Tas');
    greeter.mapNames();
    greeter.name('Lihle');
    greeter.mapNames();
    greeter.name('Joe');
    greeter.mapNames();
    assert.deepEqual(greeter.names(), {Tas:0, Lihle:0, Joe:0});
  })
})
