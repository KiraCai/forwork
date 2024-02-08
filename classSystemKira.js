class MyClass {
    constructor(name) { this.name = name; }
    myMethod() { console.log(this.name); }
  }
  let my = new MyClass("Lолр");
  my.myMethod();

  var templateList = [['Cluster B',	'RQ',	'11malC8lWDWdB_z2gUnh9w0gIuZ5ciFXW',	'2_IndigoBeaver', 'VERSION', 'online'],
    ['Cluster A',	'RQ',	'1UPVA1_4R_YtdutSIjjzSbNK2o3JjmWm_',	'173_AquaPuffin', '', 'online'],
    ['Cluster C',	'RQ',	'1HiBqO9dHHQieb17d11AGLeMSgRXdFArt',	'76_AmberChicken', 'INITRQ', 'online'],
    ['Cluster C', 'RQ',	'1isUCpGAW5AOv4FM4r5bjkiMSx2GPHKoR',	'132_AmberChinchilla', 'ARCHIVE', 'offline'],
    ['Cluster C', 'RQ',	'1snsSu3qCZi1lqfd-Oh94u4QEVtK66-1v',	'81_AmethystChameleon', '', 'online'],
    ['Cluster C',	'',	'1DEVeROhqB34A7ALhmCWV0eh7-OPiZFM8',	'109_AquaDuck', 'ARCHIVE', 'online'],
    ['Cluster C', 'RQ',	'1U6WyQ8nutqmS_aiOGo3ROx0amDiwm37c',	'163_AquamarineBee', 'UPDATE', 'offline'],
    ['Cluster D',	'RQ',	'1FtAo0JGDfI9kYS9dUa-hXlG8Y5bBp8Xe',	'89_AquaScorpion', '', 'error'],
    ['Cluster D', 'Preplag', '1V9E7nSTrPIFZ67ihtKoq2lxSPhbKAqZb',	'134_AzureImpala', 'DELETE', 'error'],
    ['Cluster E',	'RQ',	'1R6MYCiQijC9d89J6HOmhKsrcsbrUk5CZ',	'195_YellowCobra', '', '']];

  class ProductName {
    /*var event =[monthly, dayly,hourly, minute,onOpen,onEdit,manual]; var status = [online, offline, error]; var scenario = [DELETE ARCHIVE UPDATE INIT RQ VERSION];
    var product = [RQ, Preplag]; var file_IDs; var client; var cluster;*/
    constructor(status, scenario, cluster, product, id, client, event) {
      this.status = status;
      this.scenario = scenario;
      this.id = id;
      this.cluster = cluster;
      this.client = client;
      this.product = product;
      this.event = event;
  }
    searchPositionInArray (propertyToSearch){
      var positionSearche;
      switch (propertyToSearch) {
        case 'cluster':
          return positionSearche = 0;
        case 'product':
          return positionSearche = 1;
        case 'id':
          return positionSearche = 2;
        case 'client':
          return positionSearche = 3;
        case 'scenario':
          return positionSearche = 4;
        case 'status':
          return positionSearche = 5;
    } console.log(positionSearche);
  }

    propertyToString (lineFarm, lineTestWithPropertis) {
      //console.log(Object.entries(lineFarm));
      var keyString =  Object.entries(lineFarm).filter(function(prop){
        if(prop[1] == lineTestWithPropertis){
          console.log(prop);
          return prop;
        }
      })
      return keyString = keyString.flat()[0];
    }

    addNewDataInArray (valueForAdd, position, lineFarm, arrayForPut){

      arrayForPut.filter(function(item, index, arr) { //ошибка где то внутри
        //console.log(arr[index]);
        if (arr[index].indexOf(lineFarm.cluster) !== -1 && arr[index].indexOf(lineFarm.product) !== -1 && arr[index].indexOf(lineFarm.id) !== -1 &&arr[index].indexOf(lineFarm.client) !== -1 ) {
          console.log("зашло блядь");
          arrayForPut[index][position] = valueForAdd; //  здесь изменила слово arr
          console.log(arr[index]);
        }
      });
    }

    templaetList () { //для получения данных можно использовать
      //var gornal = SpreadsheetApp.openById('11YkYuCSKZYYtXshL2_v_PlAReQpab6eflZJbaRzFteA').getSheetByName("Журнал исполнения");
      //var rangDate = gornal.getRange(1, 8, 6, 1).getValues();
      var rangDate = "ляляля";
      //SpreadsheetApp.getUi().prompt(rangDate);
      console.log(rangDate);
    }
  }
  //let prod = new ProductName(statusA, scenarioA, clusters,  productA, file_IDs, clients, eventA);
  let prodTest = new ProductName('', 'INITRQ', 'Cluster C', 'RQ',	'1DEVeROhqB34A7ALhmCWV0eh7-OPiZFM8',	'109_AquaDuck', 'onEdit');
  console.log( prodTest);
  
  var lineChoise = templateList.filter(function(line){
    if (line.includes(prodTest.cluster)&& line.includes(prodTest.product)&& line.includes(prodTest.id)&& line.includes(prodTest.client)){
      console.log("Существует такая ферма " + line);
      return line;
    }
  });

  lineChoise != '' ? (console.log("уже существует такой Кластер, тип продукта, ID, клиент"), lineChoise = lineChoise.flat()) : 
      (console.log("Не существует такое сочетание кластера, типа продукта, ID и клиента. Проверьте введённые данные. Для этого продукта создана новая строка."),
      templateList[templateList.length] = [],
      templateList[templateList.length-1].push(prodTest.cluster, prodTest.product, prodTest.id, prodTest.client, prodTest.scenario, prodTest.status),
      lineChoise = templateList[templateList.length-1]);

  lineChoise = new ProductName(lineChoise[5], lineChoise[4], lineChoise[0], lineChoise[1], lineChoise[2], lineChoise[3], prodTest.event);
  console.log(lineChoise);
  console.log(lineChoise.status);
  console.log(prodTest.status);


  (lineChoise.status == 'offline' && prodTest.status == 'offline') || (prodTest.status == 'offline') ? (truth = false, lineChoise.status = 'offline') : truth = true;

  block_1: { 
  if (!truth) { 
    //превратили один ключ в строчное значение с помощью свойства объекта
    var keyStringReady = lineChoise.propertyToString(lineChoise, prodTest.status);
    // заменили ячейку в необходимой ферме на нужно значение с помощью свойства объекта
    lineChoise.addNewDataInArray(lineChoise.status, lineChoise.searchPositionInArray(keyStringReady) ,lineChoise, templateList);
    console.log(templateList[5]);
    templateList.forEach((stu) => {
      stu.forEach((data) => {
          console.log(data);
      });
    });
    
    return console.log("Прерывание процесса в связи с наличием статуса offline");}}

  console.log("продолжение процесса");


  var auto = { //ивент

    monthly() {console.log('месячная')},
    dayly() {console.log('дневная')},
    hourly() {console.log('часовая')},
    minute() {console.log('минутная')},
    onOpen() {console.log('запуск')}, // при RQ которое встретило любой ивент должно что то происходить что засунуть в приходит кластер и номер по соотве
    // надо взять остальное и выполнить ивент для события
    onEdit() {console.log('хуй знает что')} //автоматически 1 раз приизменении
    // создать универсальный продукт
  }

  var scenariObj = {                      // при пустом ивенте
    DELETE() {console.log('удалить')}, // статус офлайн по умолчанию проставляется у фермы
    ARCHIVE() {console.log('архивировать')},
    UPDATE() {console.log('обновить')},
    INITRQ() {console.log('запустить')}, // если инит то должно быть без разницы на статус результат зависиит от типа продукта
    VERSION() {console.log('другая версия')},
  }

  for(var prop of Object.entries(auto)) {
    prop[0] === prodTest.event ? (console.log(auto[prodTest.event]), console.log("выполнение event если указанно нами для данной фермы")) : console.log("нет event для выполнения") ;
  }
  // выполнили event далее выполним сценарий если есть
  for(var propsc of Object.entries(scenariObj)) {
    propsc[0] === prodTest.scenario ? (console.log(scenariObj[prodTest.scenario]), console.log("выполнение scenario если указанно нами для данной фермы")) : console.log("нет scenario для выполнения") ;
  }
  // выполнили scenario далее занесём значение выполненного сценария в таблицу

  //превратили один ключ в строчное значение с помощью свойства объекта
  keyStringReady = lineChoise.propertyToString(prodTest, prodTest.scenario);
  console.log(keyStringReady);
  // заменили ячейку в необходимой ферме на нужно значение с помощью свойства объекта
  lineChoise.addNewDataInArray(prodTest.scenario, lineChoise.searchPositionInArray(keyStringReady) ,lineChoise, templateList);
  //(valueForAdd, position, lineFarm, arrayForPut){
  /*console.log(templateList[5]);
  templateList.forEach((stu) => {
    stu.forEach((data) => {
        console.log(data);
    });
  });*/


  
  // перераспределяющая функция внутри продуктового класса исполлн ф в классе мануал
  // prod.templaetList();
  // чтобы потом писал если одно не выполнилось error



  class Manual {
    
    myMethod() { Logger.log(this.name); }
  }


  class UtilityFunction {
    constructor(name) { this.name = name; }
    myMethod() { Logger.log(this.name); }
  }
  
  function addToSideBar(){
    const htmlServ = HtmlService.createTemplateFromFile("my");
    const html = htmlServ.evaluate();
  
    const ui = SpreadsheetApp.getUi();
    ui.showSidebar(html);  
  }
  //addToSideBar()