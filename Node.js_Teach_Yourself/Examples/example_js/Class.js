var Animal = {
  createNew : function() {
    var animal = {};
    animal.name = "";
    animal.sleep = function() {
      console.log(this.name + ' Sleeping');
    }
    return animal;
  }
}

var animal1 = Animal.createNew();
animal1.name = "animal1";
animal1.sleep();
