import { expect } from 'chai';
import SinglyLinkedList from './index.js';

describe('#测试单链表类', () => {
  it('push', () => {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.toString()).to.be.eql('1,2');
    expect(linkedList.tail.next).to.be.null;
  });

  it('pop', () => {
    const linkedList = new SinglyLinkedList();

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
    expect(linkedList.head).to.be.null;
    expect(linkedList.tail).to.be.null;
  });

  it('unshift', () => {
    const linkedList = new SinglyLinkedList();

    linkedList.unshift(2);
    expect(linkedList.head.toString()).eql('2');
    expect(linkedList.tail.toString()).eql('2');

    linkedList.push(1);
    linkedList.unshift(3);

    expect(linkedList.toString()).eql('3,2,1');
  });

  it('shift', () => {
    const linkedList = new SinglyLinkedList();

    expect(linkedList.shift()).null;

    linkedList.push(1);
    linkedList.push(2);

    expect(linkedList.head.toString()).eql('1');
    expect(linkedList.tail.toString()).eql('2');

    const deletedNode1 = linkedList.shift();

    expect(deletedNode1.value).eql(1);
    expect(linkedList.toString()).eql('2');
    expect(linkedList.head.toString()).eql('2');
    expect(linkedList.tail.toString()).eql('2');

    const deletedNode2 = linkedList.shift();

    expect(deletedNode2.value).eql(2);
    expect(linkedList.toString()).eql('');
    expect(linkedList.head).null;
    expect(linkedList.tail).null;
  });

  it('reverse', () => {
    const linkedList = new SinglyLinkedList();
    linkedList
      .push(1)
      .push(2)
      .push(3);

    expect(linkedList.toString()).eql('1,2,3');
    expect(linkedList.head.value).eql(1);
    expect(linkedList.tail.value).eql(3);

    linkedList.reverse();
    expect(linkedList.toString()).eql('3,2,1');
    expect(linkedList.head.value).eql(3);
    expect(linkedList.tail.value).eql(1);

    linkedList.reverse();
    expect(linkedList.toString()).eql('1,2,3');
    expect(linkedList.head.value).eql(1);
    expect(linkedList.tail.value).eql(3);

    const linkedList2 = new SinglyLinkedList();
    linkedList2.push(1);

    expect(linkedList2.toString()).eql('1');
    expect(linkedList2.head.value).eql(1);
    expect(linkedList2.tail.value).eql(1);

    linkedList2.reverse();
    expect(linkedList2.toString()).eql('1');
    expect(linkedList2.head.value).eql(1);
    expect(linkedList2.tail.value).eql(1);
  });
});
