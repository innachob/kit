class Kit {
    constructor(name) {
      this.name = name;
      this.items = [];
    }
  
    addItem(item) {
      this.items.push(item);
      console.log(`Added ${item} to the ${this.name} kit.`);
    }
  
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
        console.log(`Removed ${item} from the ${this.name} kit.`);
      } else {
        console.log(`${item} not found in the ${this.name} kit.`);
      }
    }
  
    listItems() {
      console.log(`Items in the ${this.name} kit:`);
      this.items.forEach(item => console.log(`- ${item}`));
    }
  
    useKit() {
      console.log(`Using the ${this.name} kit...`);
      // Additional logic for using the kit can be added here
    }
  }
  
  // Example usage:
  const firstAidKit = new Kit('First Aid');
  firstAidKit.addItem('Bandages');
  firstAidKit.addItem('Antiseptic Cream');
  firstAidKit.listItems();
  firstAidKit.useKit();
  
  const craftingKit = new Kit('Crafting');
  craftingKit.addItem('Scissors');
  craftingKit.addItem('Glue');
  craftingKit.listItems();
  craftingKit.removeItem('Scissors');
  craftingKit.listItems();
  