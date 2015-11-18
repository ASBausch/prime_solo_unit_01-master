/**
 * Queue implemenation
 * @author: Amanda Bausch
 */

 function Queue() {
 	var elements = [];

 	/**
 	 * Adds an element to back of queue
 	 *
 	 * @param {*} element to add
 	 */
 	this.enqueue = function(element) {
    elements.push(element);
 	}
  /**
   * Removes first element from queue. Returns element.
   *
   **/
 	this.dequeue = function(element) {
    return elements.shift(0);
 	}
 	/**
 	 * Returns first element in queue.
 	 * Does NOT remove element.
 	 *
 	 * @return first element in queue
 	 */
 	this.front = function() {
 		return elements[0];   //returns first element without removing it
 	}
 	/**
 	 * Determine if queue is empty.
 	 *
 	 * @return true if queue has no elements,
 	 * 			false if queue has elements
 	 */
 	this.isEmpty = function() {
    if(elements.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  /**
  * Returns how many elements are in queue.
  */
  //TODO: add doc block// done?
 	this.size = function() {
 		return elements.length;
    }
};
