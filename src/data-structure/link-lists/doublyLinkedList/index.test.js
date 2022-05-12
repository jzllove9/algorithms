import { expect } from 'chai';
import DoublyLinkedList from './index.js';

describe('#测试双链表类', () => {
  it('unshift', () => {
    const linkedList = new DoublyLinkedList();
    expect(linkedList.toString()).eql('');
    linkedList.unshift(1).unshift(2).unshift(3);
    expect(linkedList.toString()).eql('3,2,1');
  });

  it('shift', () => {
    const list1 = new DoublyLinkedList();
    list1.unshift(1).unshift(2).unshift(3);
    list1.shift();
    expect(list1.toString()).eql('2,1');
    list1.shift();
    expect(list1.toString()).eql('1');

    const list2 = new DoublyLinkedList();
    expect(list2.shift()).null;
    list2.unshift(1);
    expect(list2.head.value).eql(1);
    expect(list2.tail.value).eql(1);
    const node = list2.shift();
    expect(list2.head).null;
    expect(list2.tail).null;
    expect(node.next).null;
    expect(node.prev).null;
    expect(node.value).eql(1);
  });

  it('push', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.head).null;
    expect(linkedList.tail).null;

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.head.next.value).eql(2);
    expect(linkedList.tail.prev.value).eql(1);
    expect(linkedList.toString()).eql('1,2');
  });

  it('pop', () => {
    const linkedList = new DoublyLinkedList();

    expect(linkedList.pop()).null;

    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);

    expect(linkedList.head.toString()).eql('1');
    expect(linkedList.tail.toString()).eql('3');

    const deletedNode1 = linkedList.pop();

    expect(deletedNode1.value).eql(3);
    expect(linkedList.toString()).eql('1,2');
    expect(linkedList.head.toString()).eql('1');
    expect(linkedList.tail.toString()).eql('2');

    const deletedNode2 = linkedList.pop();

    expect(deletedNode2.value).eql(2);
    expect(linkedList.toString()).eql('1');
    expect(linkedList.head.toString()).eql('1');
    expect(linkedList.tail.toString()).eql('1');

    const deletedNode3 = linkedList.pop();

    expect(deletedNode3.value).eql(1);
    expect(linkedList.toString()).eql('');
    expect(linkedList.head).null;
    expect(linkedList.tail).null;
  });

  it('reverse', () => {
    const linkedList = new DoublyLinkedList();

    // Add test values to linked list.
    linkedList
      .push(1)
      .push(2)
      .push(3)
      .push(4);

    expect(linkedList.toString()).eql('1,2,3,4');
    expect(linkedList.head.value).eql(1);
    expect(linkedList.tail.value).eql(4);

    // Reverse linked list.
    linkedList.reverse();

    expect(linkedList.toString()).eql('4,3,2,1');

    expect(linkedList.head.prev).null;
    expect(linkedList.head.value).eql(4);
    expect(linkedList.head.next.value).eql(3);
    expect(linkedList.head.next.next.value).eql(2);
    expect(linkedList.head.next.next.next.value).eql(1);

    expect(linkedList.tail.next).null;
    expect(linkedList.tail.value).eql(1);
    expect(linkedList.tail.prev.value).eql(2);
    expect(linkedList.tail.prev.prev.value).eql(3);
    expect(linkedList.tail.prev.prev.prev.value).eql(4);

    // Reverse linked list back to initial state.
    linkedList.reverse();

    expect(linkedList.toString()).eql('1,2,3,4');

    expect(linkedList.head.prev).null;
    expect(linkedList.head.value).eql(1);
    expect(linkedList.head.next.value).eql(2);
    expect(linkedList.head.next.next.value).eql(3);
    expect(linkedList.head.next.next.next.value).eql(4);

    expect(linkedList.tail.next).null;
    expect(linkedList.tail.value).eql(4);
    expect(linkedList.tail.prev.value).eql(3);
    expect(linkedList.tail.prev.prev.value).eql(2);
    expect(linkedList.tail.prev.prev.prev.value).eql(1);
  });
});
