class Task {
    id;
    // constructor `Task()`
    Task(ID) { id = ID; }
    outputTask() { output( id ); }
   }

   class XYZ inherits Task {
    label;
    // constructor `XYZ()`
    XYZ(ID,Label) { super( ID ); label = Label; }
    outputTask() { super(); output( label ); }
   }

   class ABC inherits Task {
    // ...
   }

   /*consider the class "Task". It has two subclasses XYZ and ABC which inherits the base behaviour
   from TASK  and then it uses super to override some of the base behaviour. when an instance is created from
   XYZ, that instance receives a copy of the behaviour from XYZ and also the general behaviour from Task. after
   the object has been constructed, there will be no need to interact with the classes anymore cuz the 
   new object has copies of base properties and also the more specific properties in XYZ.

   the same thing applies to ABC*/

/**================ DELEGATION THEORY======================== */
   Task = {
    setID: function(ID) { this.id = ID; },
    outputID: function() { console.log( this.id ); }
   };
   // make `XYZ` delegate to `Task`
   XYZ = Object.create( Task );
   XYZ.prepareTask = function(ID,Label) {
    this.setID( ID );
    this.label = Label;
   };
   XYZ.outputTaskDetails = function() {
    this.outputID();
    console.log( this.label );
   };
   // ABC = Object.create( Task );
   // ABC ... = ...
   /**=========================================== */
   /**line 28-43 iinvestigates delegation theory which is more
    * appropriate. Instead of classes or functions we have objects
    * that are linked to each other.
    * 
    * In line 28, we create an object called Task which will have all
    * the behaviour that other objects can delegate to or read.
    * 
    * In line 33, we create an object XYZ and we link to Task via
    * Object.create.
    * 
    * XYZ will have only its own custom properties, not duplicates
    * of the behaviours in Task as we saw in Class scenario. so for 
    * XYZ to perform its task, it will need properties from both
    * XYZ and Task. this is different from what is obtainable in classes
    * where copies of the behaviour from the class and both the specific 
    * behaviour are already present on an instance.
    * 
    * In delegation , two object will remain linked. and the first object
    * will always need to access the prototype object to access a property
    * 
    * In classes, all the behaviours that will be needed on an object
    * are all copied to that object upon construction and therefore 
    * will not need to interact with the class that constructed them.
    * 
    * 
    
    */
   
   