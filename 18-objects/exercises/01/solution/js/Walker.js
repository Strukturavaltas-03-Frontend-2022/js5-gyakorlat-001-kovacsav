function Walker(name = "John Doe", state = "dead") {
  (this.name = name),
    (this.state = state),
    Object.defineProperty(this, "firstName", {
      get() {
        return this.name.split(" ")[0];
      },
      set(firstName) {
        this.name = `${firstName} ${this.name.split(" ")[1]}`;
      },
    });
  Object.defineProperty(this, "lastName", {
    get() {
      return this.name.split(" ")[1];
    },
    set(lastName) {
      this.name = `${this.name.split(" ")[0]} ${lastName}`;
    },
  });
}

Walker.prototype.walk = function (speedInMph = 10) {
  return (
    this.name + " the " + this.state + " walks with " + speedInMph + " mph!"
  );
};

Walker.prototype.eat = function (foodName = "meat") {
  return this.name + " the " + this.state + " eats " + foodName + "!";
};

Walker.prototype.speak = function (sound = "grrrrrr") {
  return this.name + " the " + this.state + " says " + sound + "!";
};

export default Walker;
