var idClick = element(by.partialButtonText('ID'));
var uidClick = element(by.partialButtonText('User ID'));
var titleClick = element(by.partialButtonText('Title'));
var bodyClick = element(by.partialButtonText('body'));


var id = element(by.repeater('datas').column('data.id').row(0));
var idLast = element(by.repeater('datas').column('data.id').row(99));

var userid = element(by.repeater('datas').column('data.userId').row(0));
var useridLast = element(by.repeater('datas').column('data.userId').row(99));

var title = element(by.repeater('datas').column('data.title').row(0));
var titleLast = element(by.repeater('datas').column('data.title').row(99));

var body = element(by.repeater('datas').column('data.body').row(0));
var bodyLast = element(by.repeater('datas').column('data.body').row(99));



it('should check srting in first row ID first colum ascending descending order', function() {
  expect(id.getText()).toBe('1');
  expect(idLast.getText()).toBe('100');

  idClick.click();
  expect(id.getText()).toBe('100');
  expect(idLast.getText()).toBe('1');

  idClick.click();
  expect(id.getText()).toBe('1');
  expect(idLast.getText()).toBe('100');
});

it('should check srting in second colum ascending descending order', function() {
  expect(userid.getText()).toBe('1');
  expect(useridLast.getText()).toBe('10');

  uidClick.click();
  expect(userid.getText()).toBe('10');
  expect(useridLast.getText()).toBe('1');

  uidClick.click();
  expect(userid.getText()).toBe('1');
  expect(useridLast.getText()).toBe('10');
});

it('should check srting in third colum ascending descending order', function() {
  expect(title.getText()).toContain('sunt aut facere');
  expect(titleLast.getText()).toBe('voluptatum itaque dolores ');

  titleClick.click();
  expect(title.getText()).toBe('voluptatum itaque dolores ');
  expect(titleLast.getText()).toContain('sunt aut facere');

  titleClick.click();
  expect(title.getText()).toContain('sunt aut facere');
  expect(titleLast.getText()).toBe('voluptatum itaque dolores ');
});

it('should check srting in fourth colum ascending descending order', function() {
  expect(body.getText()).toContain('quia et suscipit suscipit recusandae');
  expect(bodyLast.getText()).toContain('voluptatibus ex esse sint e');

  bodyClick.click();
  expect(body.getText()).toContain('voluptatibus ex esse sint e');
  expect(bodyLast.getText()).toContain('quia et suscipit suscipit recusandae');

  bodyClick.click();
  expect(body.getText()).toContain('quia et suscipit suscipit recusandae');
  expect(bodyLast.getText()).toContain('voluptatibus ex esse sint e');
});