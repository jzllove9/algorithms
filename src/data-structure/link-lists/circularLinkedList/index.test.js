import { expect } from 'chai';
import CircularLinkedList from './index.js';

describe('#数据结构专项：链表 -- 环链表类', () => {
  it('unshift', () => {
    const linkedList = new CircularLinkedList();

    linkedList.unshift(2);
    expect(linkedList.head.toString()).eql('2');
    expect(linkedList.tail.toString()).eql('2');
    expect(linkedList.head.prev.toString()).eql('2');
    expect(linkedList.tail.next.toString()).eql('2');

    linkedList.push(1);
    linkedList.unshift(3);

    expect(linkedList.head.next.next.prev).eql(linkedList.head.next);
    expect(linkedList.tail.prev.next).eql(linkedList.tail);
    expect(linkedList.tail.prev.value).eql(2);
    expect(linkedList.tail.next).eql(linkedList.head);
    expect(linkedList.head.prev).eql(linkedList.tail);
    expect(linkedList.toString()).eql('3,2,1');
  });

  it('shift', () => {
    const linkedList = new CircularLinkedList();

    expect(linkedList.shift()).null;

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.head.toString()).eql('1');
    expect(linkedList.tail.toString()).eql('2');

    const deletedNode1 = linkedList.shift();

    expect(deletedNode1.value).eql(1);
    expect(linkedList.head.prev).eql(linkedList.tail);
    expect(linkedList.toString()).eql('2');
    expect(linkedList.head.toString()).eql('2');
    expect(linkedList.tail.toString()).eql('2');

    const deletedNode2 = linkedList.shift();

    expect(deletedNode2.value).eql(2);
    expect(linkedList.toString()).eql('');
    expect(linkedList.head).null;
    expect(linkedList.tail).null;
  });

  it('push', () => {
    const linkedList = new CircularLinkedList();

    expect(linkedList.head).null;
    expect(linkedList.tail).null;

    linkedList.push(1);

    expect(linkedList.head).eql(linkedList.tail);
    expect(linkedList.head.prev).eql(linkedList.tail);
    expect(linkedList.tail.next).eql(linkedList.head);

    linkedList.push(2);

    expect(linkedList.head.prev.value).eql(2);
    expect(linkedList.head.next.value).eql(2);
    expect(linkedList.tail.prev.value).eql(1);
    expect(linkedList.tail.next.value).eql(1);
    expect(linkedList.tail.next).eql(linkedList.head);
    expect(linkedList.head.prev).eql(linkedList.tail);

    expect(linkedList.toString()).eql('1,2');
  });

  it('pop', () => {
    const linkedList = new CircularLinkedList();

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
    expect(linkedList.tail.next).eql(linkedList.head);
    expect(linkedList.head.prev).eql(linkedList.tail);

    const deletedNode3 = linkedList.pop();

    expect(deletedNode3.value).eql(1);
    expect(linkedList.toString()).eql('');
    expect(linkedList.head).null;
    expect(linkedList.tail).null;
  });

  it('reverse', () => {
    const linkedList = new CircularLinkedList();

    // Add test values to linked list.
    linkedList
      .push(1)
      .push(2)
      .push(3)
      .push(4);

    expect(linkedList.toString()).eql('1,2,3,4');
    expect(linkedList.head.value).eql(1);
    expect(linkedList.tail.value).eql(4);

    linkedList.reverse();

    expect(linkedList.toString()).eql('4,3,2,1');

    expect(linkedList.head.prev).eql(linkedList.tail);
    expect(linkedList.head.value).eql(4);
    expect(linkedList.head.next.value).eql(3);
    expect(linkedList.head.next.next.value).eql(2);
    expect(linkedList.head.next.next.next.value).eql(1);

    expect(linkedList.tail.next).eql(linkedList.head);
    expect(linkedList.tail.value).eql(1);
    expect(linkedList.tail.prev.value).eql(2);
    expect(linkedList.tail.prev.prev.value).eql(3);
    expect(linkedList.tail.prev.prev.prev.value).eql(4);

    linkedList.reverse();

    expect(linkedList.toString()).eql('1,2,3,4');

    expect(linkedList.head.prev).eql(linkedList.tail);
    expect(linkedList.head.value).eql(1);
    expect(linkedList.head.next.value).eql(2);
    expect(linkedList.head.next.next.value).eql(3);
    expect(linkedList.head.next.next.next.value).eql(4);

    expect(linkedList.tail.next).eql(linkedList.head);
    expect(linkedList.tail.value).eql(4);
    expect(linkedList.tail.prev.value).eql(3);
    expect(linkedList.tail.prev.prev.value).eql(2);
    expect(linkedList.tail.prev.prev.prev.value).eql(1);
  });
});
