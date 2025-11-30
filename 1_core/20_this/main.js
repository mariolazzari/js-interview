// What will be logged here?

// Task 1
function getItem() {
  console.log(this);
}

getItem();

// Task 2
const item = {
  title: "Ball",
  getItem() {
    console.log("this", this);
  },
};

item.getItem();

// Task 3
class Item {
  title = "Ball";
  getItem() {
    function someFn() {
      console.log("this", this);
    }
    someFn();
  }
}

const itemObj = new Item();
itemObj.getItem();
