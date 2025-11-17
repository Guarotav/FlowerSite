class User {
  constructor(first, last, userid, password) {
    this.first = first;
    this.last = last;
    this.userid = userid;
    this.password = password;
  }
}

class Login {
  constructor() {
    this.userList = [];
    //this.loadUsers();
  }
  getItemImage(id) {
    for (let i = 0; i < this.userList.length; ++i) {
      let item = this.userList[i];
      alert(item.getItemId());
      if (item.getItemId() == id) {
        alert("Found Item:");
        return this.userList[i].getItemImage();
      }
    }
    return "";
  }
  getuserList() {
    return this.userList;
  }
  printShoppingCart() {
    for (let i = 0; i < this.userList.length; ++i) {
      let item = this.userList[i];
      alert(
        "id=" +
          item.getItemId() +
          ": desc=" +
          item.getDescription() +
          " qty=" +
          item.getNumItems()
      );
    }
  }
  addUser(first, last, userid, password) {
    for (let i = 0; i < this.userList.length; ++i) {
      let user = this.userList[i];
      if (user.userid == userid) {
        // DOES USER ALREADY EXIST??
        return false; // IF SO RETURN FALSE
      }
    }
    //NEW USER
    let newUser = new User(first, last, userid, password);
    this.userList.push(newUser);
    this.storeUsers();
  }
  delUser(userid) {
    for (let i = 0; i < this.userList.length; ++i) {
      let item = this.userList[i];
      if (item.userid == userid) {
        this.userList.splice(i, 1);
        this.storeUsers();
        return;
      }
    }
  }

  getTotalCost() {
    let total = 0;
    for (let i = 0; i < this.userList.length; ++i) {
      let item = this.userList[i];
      total += parseFloat(item.getTotalCost());
    }
    return total.toFixed(2);
  }
  addTax() {
    let total = parseFloat(this.getTotalCost());
    return (total * 0.1 + total).toFixed(2);
  }

  addShipping(shipcost = 0) {
    return (parseFloat(this.addTax()) + parseFloat(shipcost)).toFixed(2);
  }

  emptyShoppingCart() {
    this.userList = [];
    var usercart = this.userid + "cart";
    setCookie(usercart, "", -1);
  }
  storeUsers() {
    //IT STORES THE USERLIST INTO THE 'LOGIN' COOKIE
    //login = "first1: last1: userid1: password1 @first2: last2: userid2: password2"
    var cart = ""; /////?????
    var atleastone = false; //ok
    let items = this.getuserList(); //ok
    for (let i = 0; i < items.length; i++) {
      cart =
        cart +
        `${items[i].first}:${items[i].last}:${items[i].userid}:${items[i].password}@`;
      atleastone = true;
    }
    if (atleastone) {
      cart = cart.substring(0, cart.length - 1);
      setCookie("login", cart, 30);
    } else setCookie("login", "", -1);
  }
  loadUsers() {
    // LOAD LOGIN COOKIE CONTENT INTO the USERLIST ARRAY
    let cartname = this.userid + "cart";
    let cart = getCookie(cartname);
    if (cart != null) {
      var str = cart.split("@");
      for (var i = 0; i < str.length; i++) {
        var item = str[i].split(":");
        var cookiename = item[0];
        var cookievalue = item[1];
        this.setNumOrdered(cookiename, cookievalue);
      }
    }
  }
}
