function validUserNames(usernames) {
    // your code here
    //return usernames.filter(username => (username.length < 10));
    return usernames.filter(username => {
        return username.length < 10;
    })
  }