import { dictType } from './Types';

const dictionary10: dictType[] = [
	{
		rus:
			"Обратите внимание, что функция не имеет постоянного понятия 'this'. Это всегда устанавливается во время вызова на основе способа, которым это было вызвано.",
		eng:
			"Notice that the function doesn't have a persistent notion of its 'this'. It is always set at call time based upon the way it was invoked by its caller.",
	},
	{
		rus:
			"Mетод 'apply' работает точно так же, как примитив 'call', за исключением того, что он принимает объект arguments, подобный массиву, вместо того, чтобы перечислять аргументы по одному.",
		eng:
			"'apply' method works exactly like the call primitive, except that it takes an Array-like object instead of listing the arguments out one at a time.",
	},
	{
		rus:
			'Область в языке программирования управляет видимостью и временем жизни переменных и параметров. Это важная услуга для программиста, поскольку она уменьшает конфликты имен и обеспечивает автоматическое управление памятью.',
		eng:
			'Scope in a programming language controls the visibility and lifetimes of variables and parameters. This is an important serviceto the programmer because it reduces nam- ing collisions and provides automatic memory management.',
	},
	{
		rus:
			'Хорошей новостью о scope является то, что внутренние функции получают доступ к параметрам и переменным функций, в которых они определены (за исключением this и arguments).',
		eng:
			'The good news about scope is that inner functions get access to the parameters and variables of the functions they are defined within (with the exception of this and arguments).',
	},
	{
		rus:
			'Более интересным является случай, когда внутренняя функция имеет более длительный срок службы, чем ее внешняя функция.',
		eng:
			'A more interesting case is when the inner function has a longer lifetime than its outer function.',
	},
	{
		rus:
			'Область в языке программирования управляет видимостью и временем жизни переменных и параметров. Это важная услуга для программиста, поскольку она уменьшает конфликты имен и обеспечивает автоматическое управление памятью.',
		eng:
			'Scope in a programming language controls the visibility and lifetimes of variables and parameters. This is an important serviceto the programmer because it reduces nam- ing collisions and provides automatic memory management.',
	},
	{
		rus:
			'Два фактора повлияли на появление стрелочных функции: более короткий синтаксис и лексика this.',
		eng:
			'Two factors influenced the introduction of arrow functions: shorter functions and this keyword lexic.',
	},
	{
		rus:
			'У стрелочных функций нет своего собственного this.  Используется this из окружающего скоупа.',
		eng:
			"An arrow function does not have its own 'this'. The 'this' value of the enclosing lexical scope is used.",
	},
	{
		rus:
			'Методы apply, call и bind никак не влияют на стрелочные функции.',
		eng:
			"'apply', 'call' и 'bind' methods can't influence the behavior of arrow fuctions.",
	},
];

const dictionary1: dictType[] = [
	{
		rus:
			'111 Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции.',
		eng:
			"'apply', 'call' и 'bind' methods can't influence the behavior of arrow fuctions.",
	},
	{
		rus:
			'222 Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции. Методы apply, call и bind никак не влияют на стрелочные функции.',
		eng:
			"'apply', 'call' и 'bind' methods can't influence the behavior of arrow fuctions.",
	},
];

const oldDictionary1: dictType[] = [
	{
		rus:
			'API-интерфейс браузера, объектная модель документа (DOM) - довольно ужасна, и JavaScript-это несправедливо обвинили. С DOM было бы больно работать на любом языке.',
		eng:
			'The API of the browser, the Document Object Model (DOM) is quite awful, and JavaScript is unfairly blamed. The DOM would be painful to work with in any language.',
	},
	{
		rus:
			'Модель DOM плохо определена и непоследовательно реализована.',
		eng:
			'The DOM is poorly specified and inconsistently implemented.',
	},
	{
		rus:
			'Если вы хороши в каком-то другом языке, и вы должны программировать в среде, которая поддерживает только JavaScript, то вы вынуждены использовать JavaScript, и это раздражает.',
		eng:
			'If you are good in some other language and you have to program in an environment that only supports JavaScript, then you are forced to use JavaScript, and that is annoying.',
	},
	{
		rus:
			'JavaScript построен на нескольких очень хороших идеях и ряда очень плохих. Очень хорошие идеи включают функции, свободную типизацию, динамические объекты и выразительную объектную буквальную нотацию.',
		eng:
			'JavaScript is built on some very good ideas and a few very bad ones. The very good ideas include functions, loose typing, dynamic objects, and an expressive object literal notation.',
	},
	{
		rus:
			'Но оказывается, что строгая типизация не устраняет необходимости тщательного тестирования.',
		eng:
			'But it turns out that strong typing does not eliminate the need for careful testing.',
	},
	{
		rus:
			'В своей работе я обнаружил, что ошибки, которые находит сильная проверка типов, не являются ошибками, о которых я беспокоюсь.',
		eng:
			'I have found in my work that the sorts of errors that strong type checking finds are not the errors I worry about.',
	},
	{
		rus:
			'Я нахожу потерю типизации освобождающей. Мне не нужно формировать сложные иерархии классов. И мне никогда не нужно бросать или бороться с системой типов, чтобы получить поведение, которое я хочу.',
		eng:
			"I find loose typing to be liberating. I don't need to form complex class hierarchies. And I never have to cast or wrestle with the type system to get the behavior that I want.",
	},
	{
		rus:
			'JavaScript зависит от глобальных переменных для компоновки. Все переменные верхнего уровня всех единиц компиляции объединяются в общее пространство имен, называемое глобальным объектом.',
		eng:
			'JavaScript depends on global variables for linkage. All of the top-level variables of all compilation units are tossed together in a common namespace called the global object.',
	},
	{
		rus:
			'Большинство зарезервированных слов в этом списке не используются в языке.',
		eng:
			'Most of the RESERVED words in this list are not used in the language.',
	},
	{
		rus:
			'Список зарезервированных слов не включает некоторые слова, которые должны были быть зарезервированы, но не были, такие как undefined, NaN и Infinity.',
		eng:
			'The list of RESERVED words does not include some words that should have been reserved but were not, such as undefined, NaN, and Infinity.',
	},
	{
		rus:
			'JavaScript имеет очень мощную объектную литеральную нотацию. Объекты можно создавать, просто перечисляя их компоненты.',
		eng:
			'JavaScript has a very powerful object literal notation. Objects can be created simply by listing their components.',
	},
	{
		rus:
			'JavaScript имеет объектную систему без классов, в которой объекты наследуют свойства непосредственно от других объектов.',
		eng:
			'JavaScript has a class-free object system in which objects inherit properties directly from other objects.',
	},
	{
		rus:
			'У тебя нет другого выбора. Интернет стал важной платформой для разработки приложений, а JavaScript является единственным языком, который можно найти во всех браузерах.',
		eng:
			"You don't have a choice.The Web has become an important platform for application development, and JavaScript is the only language that is found in all browsers.",
	},
	{
		rus:
			'Хорошие части хороши достаточно для того чтобы скомпенсировать плохие части.',
		eng:
			'The good parts are good enough to compensate for the bad parts.',
	},
	{
		rus:
			'Cтроковый литерал может быть заключен в одинарные или двойные кавычки. Он может содержать ноль или более символов.',
		eng:
			'A string literal can be wrapped in single quotes or double quotes. It can contain zero or more characters.',
	},
	{
		rus:
			'Cтроки неизменяемы. Как только строка сделана, она никогда не может быть изменена.',
		eng:
			'Strings are immutable. Once it is made, a string can never be changed.',
	},
	{
		rus:
			'В веб-браузерах каждый тег <script> предоставляет единицу компиляции, которая компилируется и немедленно выполняется.',
		eng:
			'In web browsers, each <script> tag delivers a compilation unit that is compiled and immediately executed.',
	},
	{
		rus:
			'Так как компоновщик отсутствует, JavaScript объединяет все единицы компиляции в единое глобальное пространство имен.',
		eng:
			'Lacking a linker, JavaScript throws all compilation units together in a common global namespace.',
	},
	{
		rus:
			'При использовании внутри функции оператор var определяет приватные переменные функции.',
		eng:
			"When used inside of a function, the var statement defines the function's private variables.",
	},
	{
		rus:
			'Операторы switch, while, for и do могут иметь необязательный префикс метки, который взаимодействует с оператором break.',
		eng:
			'The switch, while, for, and do statements are allowed to have an optional label prefix that interacts with the break statement.',
	},
	{
		rus:
			'В отличие от многих других языков, блоки в JavaScript не создают новую область видимости, поэтому переменные должны быть определены в верхней части функции, а не в блоках.',
		eng:
			'Unlike many other languages, blocks in JavaScript do not create a new scope, so variables should be defined at the top of the function, not in blocks.',
	},
	{
		rus:
			'В JavaScript массивы-это объекты, функции-объекты,регулярные выражения-объекты и, конечно же, объекты.',
		eng:
			' In JavaScript, arrays are objects, functions are objects, regular expressions are objects, and, of course, objects are objects.',
	},
	{
		rus:
			'Объекты в JavaScript являются мутабельными коллекциями ключей.',
		eng: 'Objects in JavaScript are mutable keyed collections.',
	},
	{
		rus:
			'Числа, строки и логические значения являются объектно-подобными в том, что у них есть методы, но они иммутабельны.',
		eng:
			'Numbers, strings, and booleans are object-like in that they have methods, but they are immutable.',
	},
	{
		rus:
			'Объект-это контейнер свойств, в котором свойство имеет имя и значение. Имя свойства может быть любой строкой, включая пустую строку. Значением свойства может быть любое значение JavaScript, кроме undefined.',
		eng:
			'An object is a container of properties, where a property has a name and a value. A property name can be any string, including the empty string. A property value can be any JavaScript value except for undefined.',
	},
	{
		rus:
			'Все объекты, созданные из литералов объектов, привязаны к Object.prototype, объект, который поставляется с JavaScript.',
		eng:
			'All objects created from object literals are linked to Object.prototype, an object that comes standard with JavaScript.',
	},
	{
		rus:
			'Когда вы создаете новый объект, вы можете выбрать объект, который должен быть его прототипом, но механизм, который предоставляет JavaScript для этого, грязный и сложный.',
		eng:
			'When you make a new object, you can select the object that should be its prototype, but the mechanism that JavaScript provides to do this is messy and complex.',
	},
	{
		rus:
			'Ссылка на прототип не меняется при обновлении объекта. Когда мы вносим изменения в объект, прототип объекта не трогается:',
		eng:
			"The prototype link has no effect on updating. When we make changes to an object, the object's prototype is not touched.",
	},
	{
		rus:
			'Простыми типами JavaScript являются числа, строки, логические значения (true и false), null и undefined. Все остальные значения являются объектами.',
		eng:
			'The simple types of JavaScript are numbers, strings, booleans (true and false), null, and undefined. All other values are objects.',
	},
	{
		rus: 'Объекты передаются по ссылке. Они никогда не копируются.',
		eng:
			'Objects are passed around by reference. They are never copied.',
	},
	{
		rus:
			'Ссылка на прототип используется только для извлечения. Если мы пытаемся получить значение свойства из объекта, и если у объекта отсутствует имя свойства, JavaScript пытается получить значение свойства из объекта прототипа. Это называется делегированием.',
		eng:
			'The prototype link is used only in retrieval. If we try to retrieve a property value from an object, and if the object lacks the property name, then JavaScript attempts to retrieve the property value from the prototype object. This is called delegation.',
	},
	{
		rus:
			'Прототип отношения является динамическим отношением. Если мы добавим новое свойство в прототип, это свойство будет сразу видно во всех объектах, основанных на этом прототипе.',
		eng:
			'The prototype relationship is a dynamic relationship. If we add a new property to a prototype, that property will immediately be visible in all of the objects that are based on that prototype.',
	},
	{
		rus:
			'Следует использовать метод hasOwnProperty, который возвращает значение true, если объект имеет определенное свойство. Метод hasOwnProperty не смотрит на цепочку прототипов.',
		eng:
			'You should use the hasOwnProperty method, which returns true if the object has a particular property. The hasOwnProperty method does not look at the prototype chain.',
	},
	{
		rus:
			'Литерал функции может появляться везде, где может появляться выражение.',
		eng:
			'A function literal can appear anywhere that an expression can appear.',
	},
	{
		rus:
			'Кроме того, поскольку функции являются объектами, функции могут иметь методы.',
		eng:
			'Also, since functions are objects, functions can have methods.',
	},
	{
		rus:
			'Особенность функции заключается в том, что они могут быть вызваны.',
		eng:
			'The thing that is special about functions is that they can be invoked.',
	},
	{
		rus:
			'Внутренняя функция также имеет доступ к параметрам и переменным функций, в которые она вложена.',
		eng:
			'An inner function also enjoys access to the parameters and variables of the functions it is nested within.',
	},
	{
		rus:
			'Объект function, созданный литералом функции, содержит ссылку на этот внешний контекст. Это называется замыканием. Это источник огромной выразительной силы.',
		eng:
			'The function object created by a function literal contains a link to that outer context. This is called closure. This is the source of enormous expressive power.',
	},
	{
		rus:
			'Необходимо помнить, что когда функция объявляется, она содержит определение функции и closure. Closure - это набор всех переменных в области видимости на момент создания функции.',
		eng:
			'The key to remember is that when a function gets declared, it contains a function definition and a closure. The closure is a collection of all the variables in scope at the time of creation of the function.',
	},

	{
		rus:
			'То, как я всегда буду помнить closure, - это аналогия с рюкзаком. Когда функция создается и передается или возвращается из другой функции, она несет с собой рюкзак. И в рюкзаке все переменные, которые были в области видимости, когда функция была объявлена.',
		eng:
			'The way I will always remember closures is through the backpack analogy. When a function gets created and passed around or returned from another function, it carries a backpack with it. And in the backpack are all the variables that were in scope when the function was declared.',
	},
	{
		rus:
			'Асинхронные функции облегчают написание асинхронного JavaScript, но они поставляется с собственным набором подводных камней, что делает жизнь трудной для начинающих.',
		eng:
			'Asynchronous functions make it easier to write asynchronous JavaScript, but it comes with its own set of gotchas that makes life hard for beginners.',
	},

	{
		rus:
			'Вызов функции приостанавливает выполнение текущей функции, передавая управление и параметры новой функции. Помимо объявленных параметров, каждая функция получает два дополнительных параметра: this и arguments.',
		eng:
			'Invoking a function suspends the execution of the current function, passing control and parameters to the new function. In addition to the declared parameters, every function receives two additional parameters: this and arguments.',
	},
	{
		rus:
			'Этот параметр очень важен в объектно-ориентированном программировании, а его значение определяется шаблоном вызова.',
		eng:
			'The this parameter is very important in object oriented programming, and its value is determined by the invocation pattern.',
	},
	{
		rus:
			'В JavaScript существует четыре шаблона вызова: шаблон вызова метода, шаблон вызова функции, шаблон вызова конструктора и шаблон вызова apply. Шаблоны отличаются тем, как инициализируется бонус параметр this.',
		eng:
			'There are four patterns of invocation in JavaScript: the method invocation pattern, the function invocation pattern, the constructor invocation pattern, and the apply invocation pattern. The patterns differ in how the bonus parameter this is initialized.',
	},
	{
		rus:
			'Оператор вызова-это пара скобок, которая следует за любым выражением, создающим значение функции.',
		eng:
			'The invocation operator is a pair of parentheses that follow any expression that produces a function value.',
	},
	{
		rus:
			'Если число аргументов и число параметров не совпадают, ошибка выполнения отсутствует.',
		eng:
			'There is no runtime error when the number of arguments and the number of parameters do not match.',
	},
	{
		rus:
			'Если значений аргументов слишком много, дополнительные значения аргументов будут проигнорированы. Если значений аргументов слишком мало, то в качестве пропущенных значений подставляется undefined.',
		eng:
			'If there are too many argument values, the extra argument values will be ignored. If there are too few argument values, the undefined value will be substituted for the missing values.',
	},
	{
		rus:
			'Когда функция хранится как свойство объекта, мы называем это метод. При вызове метода его this привязывается к этому объекту.',
		eng:
			'When a function is stored as a property of an object, we call it a method. When a method is invoked, this is bound to that object.',
	},
	{
		rus:
			'Функции связаны с Function.prototype (который сам связан с Object.prototype.)',
		eng:
			'Function objects are linked to Function.prototype (which is itself linked to Object.prototype).',
	},
	{
		rus:
			'Каждая функция также создается с двумя дополнительными скрытыми свойствами: контекстом функции и кодом, реализующим поведение функции.',
		eng:
			"Every function is also created with two additional hidden properties: the function's context and the code that implements the function's behavior.",
	},
	{
		rus:
			'Каждый объект функции также создается со свойством прототипа. Его значением является объект со свойством конструктора, значением которого является функция. Это отличается от скрытой ссылки на функцию.прототип.',
		eng:
			'Every function object is also created with a prototype property. Its value is an object with a constructor property whose value is the function. This is distinct from the hidden link to Function.prototype.',
	},
	{
		rus:
			'Метод может использовать this для доступа к объекту, чтобы получить значения из объекта или изменить объект. Привязка this к объекту происходит во время вызова.',
		eng:
			'A method can use this to access the object so that it can retrieve values from the object or modify the object. The binding of this to the object happens at invocation time.',
	},
	{
		rus:
			'Это очень позднее связывание делает функции, которые используют this очень многоразовым. Методы, которые получают контекст объекта из this, называются открытыми методами.',
		eng:
			'This very late binding makes functions that use this highly reusable. Methods that get their object context from this are called public methods.',
	},
	{
		rus:
			'Если функция не является свойством объекта, то она вызывается как функция и this привязывается к глобальному объекту.',
		eng:
			'When a function is not the property of an object, then it is invoked as a function and THIS is bound to the global object.',
	},
	{
		rus:
			'Это была ошибка в дизайне языка. Если бы язык был разработан правильно, то при вызове внутренней функции она все равно была бы привязана к переменной THIS внешней функции.',
		eng:
			'This was a mistake in the design of the language. Had the language been designed correctly, when the inner function is invoked, THIS would still be bound to the THIS variable of the outer function.',
	},
	{
		rus:
			'Если метод определяет переменную и присваивает ей значение THIS, то внутренняя функция будет иметь к ней доступ через эту переменную.',
		eng:
			'If the method defines a variable and assigns it the value of THIS, the inner function will have access to THIS through that variable.',
	},
	{
		rus:
			"функциональный литерал состоит из четырех частей. Первая часть - зарезервированное слово 'funciton'. Необязательная вторая часть-это имя функции.",
		eng:
			"A function literal has four parts. The first part is the reserved word function. The optional second part is the function's name.",
	},
	{
		rus:
			'Функция может использовать свое имя для рекурсивного вызова. Это имя также может использоваться отладчиками и средствами разработки для идентификации функции.',
		eng:
			'The function can use its name to call itself recursively. The name can also be used by debuggers and development tools to identify the function.',
	},
	{
		rus:
			'Если функции не присвоено имя, как показано в предыдущем примере, она называется анонимной.',
		eng:
			'If a function is not given a name, as shown in the previous example, it is said to be anonymous.',
	},
	{
		rus:
			'Третья часть-набор параметров функции, заключенный в круглые скобки. В скобках указан набор из нуля или более имен параметров, разделенных запятыми.',
		eng:
			'The third part is the set of parameters of the function, wrapped in parentheses. Within the parentheses is a set of zero or more parameter names, separated by commas.',
	},
	{
		rus:
			'Четвертая часть представляет собой набор операторов, заключенных в фигурные скобки. Эти операторы тела функции. Они выполняются при вызове функции.',
		eng:
			'The fourth part is a set of statements wrapped in curly braces. These statements are the body of the function. They are executed when the function is invoked.',
	},
	{
		rus:
			'JavaScript-это язык прототипного наследования. Это означает, что объекты могут наследовать свойства от других объектов.',
		eng:
			'JavaScript is a prototypal inheritance language. That means that objects can inherit properties directly from other objects.',
	},
	{
		rus:
			"The Constructor Invocation Pattern. Если функция вызывается с префиксом' new', то будет создан новый объект со скрытой ссылкой на значение члена прототипа функции, и 'this' будет привязан к этому новому объекту.",
		eng:
			"The Constructor Invocation Pattern. If a function is invoked with the 'new' prefix, then a new object will be created with a hidden link to the value of the function's prototype member, and 'this' will be bound to that new object.",
	},
	{
		rus: "Префикс 'new' также изменяет поведение оператора return.",
		eng:
			"The 'new' prefix also changes the behavior of the return statement.",
	},
	{
		rus:
			"Функции, предназначенные для использования с префиксом 'new', называются конструкторами. По соглашению они хранятся в переменных с заглавной буквы.",
		eng:
			"Functions that are intended to be used with the 'new' prefix are called constructors. By convention, they are kept in variables with a capitalized name.",
	},
	{
		rus:
			"Если конструктор вызывается без префикса 'new', могут произойти очень плохие вещи без предупреждения во время компиляции или во время выполнения, поэтому соглашение о капитализации действительно важно.",
		eng:
			"If a constructor is called without the 'new' prefix, very bad things can happen without a compile-time or runtime warning, so the capitalization convention is really important.",
	},
	{
		rus:
			'Бонусный параметр, доступный функциям при их вызове, является массивом аргументов.',
		eng:
			'A bonus parameter that is available to functions when they are invoked is the arguments array.',
	},
	{
		rus:
			"Из-за ошибки проектирования 'arguments' на самом деле не являются массивом. Это объект, подобный массиву. arguments имеет свойство length, но в нем отсутствуют все методы массива.",
		eng:
			'Because of a design error, arguments is not really an array. It is an array-like object. arguments has a length property, but it lacks all of the array methods.',
	},
	{
		rus:
			"Если функция была вызвана с префиксом 'new' и возвращаемое значение не является объектом, то возвращается 'this' (новый объект).",
		eng:
			"If the function was invoked with the 'new' prefix and the return value is not an object, then 'this' (the new object) is returned instead.",
	},
];

const veryOldDictionary1: dictType[] = [
	{
		rus:
			'К концу планирования спринта команда разработчиков должна быть в состоянии объяснить владельцу продукта и мастеру Scrum, как она намерена работать как самоорганизующаяся команда для достижения цели спринта.',
		eng:
			'By the end of the Sprint Planning, the Development Team should be able to explain to the Product Owner and Scrum Master how it intends to work as a self-organizing team to accomplish the Sprint Goal.',
	},
	{
		rus:
			'Цель спринта это набор целей, которые могут быть достигнуты путем реализации беклога продукта.',
		eng:
			'The Sprint Goal is an objective set for the Sprint that can be met through the implementation of Product Backlog.',
	},
	{
		rus:
			'Ежедневный Scrum-это 15-минутное событие для команды разработчиков.',
		eng:
			'The Daily Scrum is a 15-minute time-boxed event for the Development Team.',
	},
	{
		rus:
			'Ежедневный Scrum проводится в одно и то же время и каждый день, чтобы уменьшить сложность.',
		eng:
			'The Daily Scrum is held at the same time and place each day to reduce complexity.',
	},
	{
		rus:
			'Ежедневный Scrum-это внутреннее собрание команды разработчиков. Если присутствуют другие, Scrum Master гарантирует, что они не нарушают собрание.',
		eng:
			'The Daily Scrum is an internal meeting for the Development Team. If other are present, the Scrum Master ensures that they do not disturb the meeting.',
	},
	{
		rus:
			'Sprint Review проводится в конце спринта для проверки приращения и адаптации беклога продукта, если это необходимо.',
		eng:
			'A Sprint Review is held at the end of the Sprint to inspect the increment and adapt the Product Backlog if needed.',
	},
	{
		rus:
			'Во время Sprint Preview команда Scrum и заинтересованные стороны сотрудничают о том, что было сделано в спринте.',
		eng:
			'During the Sprint Preview, the Scrum Team and stakeholders collaborate about what was done in the Sprint.',
	},
	{
		rus:
			'Результатом Sprint Preview является пересмотренный беклог, который определяет вероятные элементы отставания продукта для следующего спринта.',
		eng:
			'The result of the Sprint Preview is a revised Product Backlog that defines the probable Product Backlog items for the next Sprint.',
	},
	{
		rus:
			'Ретроспектива спринта-это возможность для команды Scrum проверить себя и создать план улучшений, которые будут введены в действие во время следующего спринта.',
		eng:
			'The Sprint Retrospective is an opportunity for the Scrum Team to inspect itself and create a plan for improvements to be enacted during the next Sprint.',
	},
	{
		rus:
			'Цель ретроспективы спринта состоит в том, чтобы создать план реализации улучшений в том, как команда Scrum работает.',
		eng:
			'The purpose of the Sprint Retrospective is to create a plan for implementing improvements to the way the Scrum Team does it work.',
	},
	{
		rus:
			'Хотя улучшения могут быть реализованы в любое время, ретроспектива спринта предоставляет официальные возможности сосредоточиться на проверке и адаптации.',
		eng:
			'Although improvements may be implemented at any time, the Sprint Retrospective provides a formal opportunities to focus on inspection and adaption.',
	},
	{
		rus:
			'Артефакты Scrum представляют работу или ценность для обеспечения прозрачности и возможностей для проверки и адаптации.',
		eng:
			"Scrum's artifacts represent work or value to provide transparency and opportunities for inspection and adaption.",
	},
	{
		rus:
			'Артефакты, определенные Scrum, специально разработаны для максимальной прозрачности ключевой информации, чтобы у всех было одинаковое понимание артефакта.',
		eng:
			'Artifacts defined by Scrum are specifically designed to maximize transparency of key information so that everybody has the same understanding of the artifact.',
	},
	{
		rus:
			'Беклог продукта-это упорядоченный список всего, что необходимо в продукте.',
		eng:
			'The Product Backlog is an ordered list of everything that is known to be needed in the product.',
	},
	{
		rus:
			'Беклог продукта является единственным источником требований для любых изменений, которые будут внесены в продукт.',
		eng:
			'The Product Backlog is the single source of requirements for any changes to be made to the product.',
	},
	{
		rus:
			"В списке 'Беклог продукта' перечислены все функции, функции, требования, улучшения и исправления, составляющие изменения, которые необходимо внести в продукт в будущих выпусках.",
		eng:
			'The Product Backlog lists all the features, functions, requirements, enhancements, and fixes that constitute the changes to be made to the product in future releases.',
	},
	{
		rus:
			'Новый спринт начинается сразу после завершения предыдущего спринта.',
		eng:
			'A new sprint starts immediately after the conclusion of the previous sprint.',
	},
	{
		rus:
			'Во время спринта не вносится никаких изменений, которые могли бы поставить под угрозу цель спринта.',
		eng:
			'During the sprint no changes are made that would endanger the Sprint Goal.',
	},
	{
		rus:
			'Во время спринта область спринта может быть уточнена и повторно согласована между владельцем продукта и командой разработчиков.',
		eng:
			'During the Sprint the Sprint scope may be clarified and re-negotiated between the Product Owner and Development Team.',
	},
	{
		rus: 'Как и проекты, спринты используются для чего-то.',
		eng: 'Like projects, Sprints are used to accomplish something.',
	},
	{
		rus:
			'Спринты обеспечивают предсказуемость, обеспечивая проверку и адаптацию прогресса к цели спринта, по крайней мере, каждый календарный месяц.',
		eng:
			'Sprints enable predictability by ensuring inspection and adaption of progress toward a Sprint Goal at least every calendar month.',
	},
	{
		rus:
			'Только владелец продукта имеет право отменить спринт, хотя он или она может сделать это под влиянием стекхолдеров, команды разработчиков или мастера Scrum.',
		eng:
			'Only the Product Owner has the authority to cancel the Sprint, although he or she may do so under influence of the stakeholders, the Development Team, or the Scrum Master.',
	},
	{
		rus:
			'Отмена спринта потребляет ресурсы, так как все перегруппировываются в планировании другого спринта, чтобы начать другой спринт.',
		eng:
			'Sprint cancellations consume resources, since everyone regroups in another Sprint Planning to start another Sprint.',
	},
	{
		rus:
			'Работа, которая будет выполнена в спринте, планируется при планировании спринта. Этот план создается совместной работой всей команды Scrum.',
		eng:
			'The work to be performed in the Sprint is planned at the Sprint Planning. This plan is crated by the collaboration work of the entire Scrum Team.',
	},
	{
		rus:
			'Планирование спринта отвечает на следующее: Что может быть поставлено, как инкрементальный результат предстоящего спринта.',
		eng:
			'Sprint Planning answers the following: What can be delivered in the Increment resulting from the upcoming Sprint.',
	},
	{
		rus:
			'Команда Scrum состоит из ПО, команды разработки и мастера Scrum.',
		eng:
			'The Scrum Team consists of a Product Owner, the Development Team and a Scrum Master.',
	},
	{
		rus:
			'Команды Scrum являются самоорганизующимися и кросс-функциональными.',
		eng: 'Scrum Teams are self-organizing and cross-functional.',
	},
	{
		rus:
			'Самоорганизующиеся команды выбирают, как лучше выполнять свою работу, а не руководятся другими из вне.',
		eng:
			'Self-organizing teams choose how best to accomplish their work, rather than being directed by other outside the team.',
	},
	{
		rus:
			'Кросс-функциональные команды обладают всеми компетенциями, необходимыми для выполнения работы и не зависят от другой части, не входящей в состав команды.',
		eng:
			'Cross-functional teams have all competencies needed to accomplish the work without depending on the other not part of the team.',
	},
	{
		rus:
			'Командная модель в scrum разработана для оптимизации гибкости, креативности и производительности.',
		eng:
			'The team model in scrum is designed to optimize flexibility, creativity, and productivity.',
	},
	{
		rus:
			'Команда scrum зарекомендовала себя все более эффективной для всех ранее заявленных применений и любой сложной работы.',
		eng:
			'The scrum team has proven itself to be increasingly effective for all the earlier stated uses, and any complex work.',
	},
	{
		rus:
			'Scrum-команды поставляют продукты итеративно и инкрементально, максимизируя возможности для обратной связи.',
		eng:
			'Scrum teams deliver products iteratively and incrementally, maximizing opportunities for feedback.',
	},
	{
		rus:
			'Дополнительные поставки готового продукта гарантируют, что потенциально полезная версия рабочего продукта всегда доступна.',
		eng:
			"Incremental deliveries of 'Done' product ensure a potentially useful version of working product is always available.",
	},
	{
		rus:
			'ПО несет ответственность за максимизацию стоимости продукта в результате работы команды разработчиков.',
		eng:
			'The Product Owner is responsible for maximizing the value of the product resulting from work of the Development Team.',
	},
	{
		rus:
			'ПО является единственным лицом, ответственным за управление беклога продукта.',
		eng:
			'The Product Owner is the sole person responsible for managing the Product Backlog.',
	},
	{
		rus:
			'ПО гарантирует, беклог продукта виден, прозрачен и понятен всем, и показывает, над чем будет работать Scrum команда.',
		eng:
			'PO ensures that the Product Backlog is visible, transparent, and clear to all, and shows what the Scrum Team will work on next.',
	},
	{
		rus:
			'ПО гарантирует, что команда разработчиков понимает элементы в беклоге до необходимого уровня.',
		eng:
			'PO ensures the Development Team understands items in the Product Backlog to the level needed.',
	},
	{
		rus: 'ПО - это один человек, а не комитет.',
		eng: 'PO is one person, not a committee.',
	},
	{
		rus:
			'Тот, кто хочет изменить приоритет элемента в беклоге, должен обратиться к ПО.',
		eng:
			"Those wanting to change a Product Backlog item's priority must address the Product Owner.",
	},
	{
		rus:
			'Для успеха ПО вся организация должна уважать его или ее решения.',
		eng:
			'For the PO to succeed, the entire organization must respect his or her decisions.',
	},
	{
		rus:
			'Три столпа поддерживают каждую реализацию эмпирического управления процессами: прозрачность, инспекция и адаптация.',
		eng:
			'Three pillars uphold every implementation of empirical process control: transparency, inspection, and adaption.',
	},
	{
		rus:
			'Значительные аспекты процесса должны быть видны тем, кто несет ответственность за результат.',
		eng:
			'Significant aspects of the process must be visible to those responsible for the outcome.',
	},
	{
		rus:
			'Transparency требует, чтобы эти аспекты определялись общим стандартом, чтобы наблюдатели разделяли общее понимание того, что наблюдается.',
		eng:
			'Transparency requires those aspects be defined by common standard so observers share a common understanding of what is been seen.',
	},
	{
		rus:
			'Общий язык, относящийся к процессу, должен быть общим для всех участников.',
		eng:
			'A common language referring to the process must be shared by all participants.',
	},
	{
		rus:
			"Выполняющие работу и проверяющие результирующее приращение должны иметь общее определение 'сделано'.",
		eng:
			"Those performing the work and those inspecting the resulting increment must share common definition of 'Done'",
	},
	{
		rus:
			'Пользователи Scrum должны часто проверять артефакты Scrum и продвигаться к цели Sprint для обнаружения нежелательных отклонений.',
		eng:
			'Scrum users must frequently inspect Scrum artifacts and progress towards a Sprint Goal to detect undesired variances.',
	},
	{
		rus:
			'Их осмотр не должен быть настолько частым, чтобы он мешал работе.',
		eng:
			'Their inspection should not be so frequent that inspection gets in the way of the work.',
	},
	{
		rus:
			'Инспекции приносят наибольшую пользу, если их добросовестно проводят квалифицированные инспекторы в месте работы.',
		eng:
			'Inspections are most beneficial when diligently performed by skilled inspectors at the point of work.',
	},
	{
		rus:
			'Если инспектор определяет, что один или несколько аспектов процесса выходят за допустимые пределы, и что полученный продукт будет неприемлем, процесс или обрабатываемый материал должны быть скорректированы.',
		eng:
			'If an inspector determines that one or more aspects of a process deviate outside acceptable limits, and that resulting product will be unacceptable, the process or the material being processed must be adjusted.',
	},
	{
		rus:
			'(Адаптация) Необходимо как можно скорее произвести корректировку, чтобы свести к минимуму дальнейшее отклонение.',
		eng:
			'(Adaption) An adjustment must be made as soon as possible to minimize futher deviation.',
	},
	{
		rus:
			'Scrum предписывает четыре официальных события для проверки и адаптации, как описано в разделе Scrum Events этого документа. Планирование Спринта. Ежедневный Скрам. Спринт Обзор. Ретроспектива Спринта.',
		eng:
			'Scrum prescribes four formal events for inspection and adaption, as described in the Scrum Events section of this document. Sprint Planning. Daily Scrum. Sprint Review. Sprint Retrospective.',
	},
	{
		rus:
			'В случаях, когда ценности решимости, мужества, целенаправленности, открытость и уважения воплощаются и проживаются скрам командой, скрам основы транспарентности, проверки и адаптации оживают и укрепляют доверие для всех.',
		eng:
			'When the values of commitment, courage, focus, openness and respect are embodied and lived by Scrum Team, the Scrum pillars of transparency, inspection, and adaption come to life and build trust for everyone.',
	},
	{
		rus:
			'Успешное использование Scrum зависит от того, что люди становятся более опытными в этих пяти ценностях.',
		eng:
			'Successful use of Scrum depends on people becoming more proficient in living these five values.',
	},
	{
		rus:
			'Заказчики и разработчики должны ежедневно работать вместе на протяжении всего проекта.',
		eng:
			'Business people and developers must work together daily throughout the project.',
	},
	{
		rus:
			'Постоянное внимание к техническому совершенству и хорошему дизайну повышает гибкость.',
		eng:
			'Continuous attention to technical excellence and good design enhances agility.',
	},
	{
		rus:
			'Через регулярные промежутки времени, команда размышляет о том, как стать более эффективной, подстраивает и корректирует свое поведение соответствующим образом.',
		eng:
			'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
	},
	{
		rus:
			'Люди и взаимодействия выше, чем процессы и инструменты. Работающее software выше, чем всеобъемлющая документация. Сотрудничество с заказчиком выше, чем обсуждение условий контракта. Реагирование на изменения выше, чем следование плану. Мудрость и здравый смысл превыше знаний и опыта.',
		eng:
			'Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan. Wisdom and common sense over knowledge and expertise.',
	},
	{
		rus:
			'Наша первоочередная задача состоит в том, чтобы удовлетворить потребности клиентов в своевременной и непрерывной поставке ценного программного обеспечения.',
		eng:
			'Our highest priority is to satisfy the customer trough early and continuous delivery of valueable software.',
	},
	{
		rus:
			'Приветствуются изменения требований, даже на поздних стадиях разработки. Гибкие процессы используют изменения для конкурентного преимущества клиента.',
		eng:
			"Welcome changing requirements, even late in development. Agile processes harness change for the customer's competive advantage.",
	},
	{
		rus:
			'Поставляйте рабочее программное обеспечение часто, от нескольких недель до нескольких месяцев, с предпочтением к более коротким временным рамкам.',
		eng:
			'Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale.',
	},
	{
		rus:
			'Заказчики и разработчики должны ежедневно работать вместе на протяжении всего проекта.',
		eng:
			'Business people and developers must work together daily throughout the project.',
	},
	{
		rus:
			'Стройте проекты вокруг мотивированных людей. Дайте им окружение и поддержку, в которой они нуждаются, и доверяйте им, чтобы работа была сделана.',
		eng:
			'Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done.',
	},
	{
		rus:
			'Наиболее эффективным и действенным способом передачи информации команде разработчиков и внутри нее является личная беседа.',
		eng:
			'The most efficient and effective method of conveying information to and within a development team is face-to-face conversation.',
	},
	{
		rus: 'Рабочая программа-основной критерий прогресса.',
		eng: 'Working software is the primary measure of progress.',
	},
	{
		rus:
			'Гибкие процессы способствуют устойчивому развитию. Спонсоры, разработчики и пользователи должны иметь возможность поддерживать постоянный темп на неопределенный срок.',
		eng:
			'Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely.',
	},
	{
		rus:
			'Постоянное внимание к техническому совершенству и хорошему дизайну повышает гибкость.',
		eng:
			'Continuous attention to technical excellence and good design enhances agility.',
	},
	{
		rus:
			'Лучшие архитектуры, требования и проекты появляются из самоорганизующихся команд.',
		eng:
			'The best architectures, requirements, and designs emerge from self-organizing teams.',
	},
	{
		rus:
			'Через регулярные промежутки времени, команда размышляет о том, как стать более эффективной, подстраивает и корректирует свое поведение соответствующим образом.',
		eng:
			'At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly.',
	},
	{
		rus:
			'Scrum-это framework, в котором люди могут решать сложные адаптивные проблемы, продуктивно и творчески доставляя продукты максимально возможной ценности',
		eng:
			'Scrum is a framework within which people can address complex adaptive problems, while productively and creatively delivering products of the highest possible value.',
	},
	{
		rus:
			'Scrum-это не методология. Scrum реализует научный метод эмпиризма.',
		eng:
			'Scrum is not a methodology. Scrum implements the scientific method of empiricism.',
	},
	{
		rus:
			'Scrum заменяет запрограммированный алгоритмический подход эвристическим, с уважением к людям и самоорганизацией для решения непредсказуемости и решения сложных проблем.',
		eng:
			'Scrum replaces a programmed algorithmic approach with a heuristic one, with respect for people and self-organization to deal with unpredictability and solving complex problems.',
	},
	{
		rus:
			'Scrum не является процессом, техникой или окончательным методом. Скорее, это framework, в которыом вы можете использовать различные процессы и методы.',
		eng:
			'Scrum is not a process, technique, or definitive method. Rather, it is a framework within which you can employ various processes and techniques.',
	},
	{
		rus:
			'Framework Scrum состоит из команд Scrum и связанных с ними ролей, событий, артефактов и правил. Каждый компонент в рамках служит определенной цели и имеет важное значение для успеха и использования Скрама.',
		eng:
			"The Scrum framework consists of Scrum Teams and their associated roles, events, artifacts, and rules. Each component within the framework serves a specific purpose and is essential to Scrum's success and usage.",
	},
	{
		rus:
			'Правила Scrum связывают вместе роли, события и артефакты, управляя отношениями и взаимодействием между ними.',
		eng:
			'The rules of Scrum bind together the roles, events, and artifacts, governing the relationships and interaction between them.',
	},
	{
		rus: 'Правила Scrum описаны всюду по телу этого документа.',
		eng:
			'The rules of Scrum are described throughout the body of this document.',
	},
	{
		rus:
			'Мы выявляем лучшие способы разработки программного обеспечения, делая это и помогая другим делать это.',
		eng:
			'We are uncovering better ways of developing software by doing it and helping others do it.',
	},
	{
		rus: 'Через эту работу мы пришли к ценности.',
		eng: 'Through this work we have come to value.',
	},
	{
		rus:
			'Люди и взаимодействия выше, чем процессы и инструменты. Работающее software выше, чем всеобъемлющая документация. Сотрудничество с заказчиком выше, чем обсуждение условий контракта. Реагирование на изменения выше, чем следование плану. Мудрость и здравый смысл превыше знаний и опыта.',
		eng:
			'Individuals and interactions over processes and tools. Working software over comprehensive documentation. Customer collaboration over contract negotiation. Responding to change over following a plan. Wisdom and common sense over knowledge and expertise.',
	},
	{
		rus:
			'То есть, в то время как есть ценность в элементах справа, мы ценим элементы слева больше.',
		eng:
			'That is, while there is value in the items on the right, we value the items on the left more.',
	},
	{
		rus:
			'Оптимальный размер команды разработчиков должен быть достаточно мал, чтобы оставаться маневренным, и достаточно большим, чтобы завершить значительную работу в sprint.',
		eng:
			'Optimal Development Team size is small enough to remain nimble and large enough to complete significant work within sprint.',
	},
	{
		rus:
			'Менее трех членов команды разработки уменьшают взаимодействие и приводят к меньшей производительности.',
		eng:
			'Fewer than three Development Team members decreases interaction and results in smaller productivity gains.',
	},
	{
		rus:
			'Наличие более девяти членов команды разработчиков требует слишком большой координации.',
		eng:
			'Having more than nine Development Team members requires to much coordination.',
	},
	{
		rus:
			'Большая команда разработчиков создает большую сложность, чтобы эмпирический процесс был полезен.',
		eng:
			'Large Development Team generates to much complexity for an empirical process to be useful.',
	},
	{
		rus:
			'Scrum Master отвечает за продвижение и поддержку Scrum, как определено в руководстве Scrum.',
		eng:
			'The Scrum Master is responsible for promoting and supporting Scrum as defined in the Scrum Guide.',
	},
	{
		rus:
			'Scrum Master помогает всем понять теорию, практику, правила и ценности Scrum.',
		eng:
			'The Scrum Master helps everyone understand Scrum theory, practices, rules, and values.',
	},
	{
		rus: 'Scrum Master является слугой-лидером для команды Scrum.',
		eng: 'The Scrum Master is servant-leader for the Scrum Team.',
	},
	{
		rus:
			'Scrum Master помогает тем, кто не входит в команду Scrum, понять, какое из их взаимодействий с командой Scrum полезно, а какое нет.',
		eng:
			"The Scrum Master helps those outside the Scrum Team understand which of their interactions with Scrum Team are helpful and which aren't.",
	},
	{
		rus: 'Scrum Master служит продакт оунеру несколькими способами.',
		eng:
			'The Scrum Master servers the Product Owner in several ways.',
	},
	{
		rus:
			'Scrum Master делает коучинг команды разработчиков в самоорганизации и кросс-функциональности.',
		eng:
			'The Scrum Master makes coaching the Development Team in self-organisation and cross-functionality.',
	},
	{
		rus:
			'Scrum Master помогает сотрудникам и стекхолдерам понять и принять Scrum и эмпирическую разработку продукта.',
		eng:
			'The Scrum Master helps employees and stakeholders understand and enact Scrum and empirical product development.',
	},
	{
		rus:
			'Предписанные события используются в Scrum для создания регулярности и минимизации потребности в собраниях, не определенных в Scrum.',
		eng:
			'Prescribed events are used in Scrum to create regularity and to minimise the need for meetings non defined in Scrum.',
	},
	{
		rus: 'Все события являются событиями с временной шкалой.',
		eng: 'All events are time-boxed events.',
	},
	{
		rus:
			'Как только начинается спринт, его продолжительность фиксирована и не может быть сокращена или удлинена.',
		eng:
			'Once a Sprint begins, its duration is fixed and cannot be shortened or lenghtened.',
	},
	{
		rus:
			'События кроме спринта могут заканчиваться всякий раз, когда цель события достигается.',
		eng:
			'Other than the Sprint events may end whenever the purpose of the event is achieved.',
	},
	{
		rus:
			"Сердце Scrum-это sprint, с времмеными рамками в один месяц или меньше, в течение которого создается 'сделанный', пригодный для использования и потенциально выпускаемый инкремент продукта.",
		eng:
			"The heart of Scrum is sprint, a time-box one month or less during which a 'Done', useable, and potentially releasable product Increment is created.",
	},
	{
		rus:
			'Спринт состоит из планирования спринта, ежедневных схваток, работы по разработке, обзора спринта и ретроспективы спринта.',
		eng:
			'Sprint consists of the Sprint Planning, Daily Scrums, the development work, the Sprint Review, and the Sprint Retrospective.',
	},
	{
		rus:
			'Каждый спринт можно рассматривать как проект с горизонтом не более одного месяца.',
		eng:
			'Each Sprint may be considered a project with no more than a one-month horizon.',
	},
	{
		rus: 'Каждый спринт имеет цель того, что должно быть построено.',
		eng: 'Each Sprint has a goal of what is to be build.',
	},
];

const dictionary20: dictType[] = [
	{
		rus: 'Какой образ хотела бы произвести ваша компания?',
		eng: 'What kind of image would your company like to project?',
	},
	{
		rus:
			'Мне нужно больше деталей, чтобы составить мнение об этой новой технологии.',
		eng:
			'I need more details to form an opinion about this new technology.',
	},
	{
		rus: 'Он был очень высокомерен, разговаривая со своим боссом.',
		eng: 'He was extremely arrogant while talking to his boss.',
	},
	{
		rus: 'Она производит впечатление дружелюбного человека',
		eng: 'She comes accros as a friendly person.',
	},
	{
		rus:
			'Умная внешность производит благоприятное впечатление на собеседовании.',
		eng:
			'Smart appearance makes a favourable impression at an interview.',
	},
	{
		rus:
			'Показной человек ведет себя или выглядит так, чтобы произвести впечатление',
		eng:
			'An ostentatious person behaves or looks in a way that is meant to impress.',
	},
	{
		rus: 'Многие не считают политиков заслуживающими доверия.',
		eng: 'Many people do not see politicians as trustworthy.',
	},
	{
		rus: 'Я всегда был осторожен, давая людям свой номер телефона.',
		eng:
			'I have always been cautious about giving people my phone number.',
	},
	{
		rus: 'Они построили репутацию надежного сервиса.',
		eng: "They've built a reputation for reliable service.",
	},
	{
		rus: 'Важно построить хорошие отношения с вашей командой',
		eng:
			"It's essential to build a good relationship with your team.",
	},
	{
		rus: '(contact information)',
		eng: 'I was given your details by my colleague.',
	},
	{
		rus: '(calling about)',
		eng: "I'm calling about the email I sent you.",
	},
	{
		rus: '(wanted to ask)',
		eng:
			"I wondered if you'd had time to look through the portfolio I sent.",
	},
	{
		rus: '(interested in)',
		eng:
			"I wanted to see if you're still interested in our proposal.",
	},
	{ rus: '(answering)', eng: 'Thanks for responding so quickly.' },
	{
		rus: '(get together)',
		eng: 'I suggest we meet to discuss things further.',
	},
	{
		rus: '(any option works for me)',
		eng: "Fine, whatever's best for you.",
	},
	{
		rus: '(the date and time might be changed)',
		eng:
			"Let's say, provisionally, Wednesday the 15th at 11 o'clock.",
	},
	{
		rus: '(say that our meeting will take place)',
		eng: "I'll get my assistant to call you later today to confirm.",
	},
	{
		rus: '(the way to office)',
		eng: 'Can you tell me how I get to your office?',
	},
	{
		rus: '(What option do you recommend?)',
		eng: 'Is it best by taxi or public transport?',
	},
	{
		rus: '(instructions)',
		eng: "I'll email you a map and directions from your hotel.",
	},
	{
		rus: 'takes minutes',
		eng:
			'It only takes 20 minutes to get from the office to the station',
	},
	{
		rus: '(take)',
		eng:
			"How long's the meeting? Will I have time to catch the train at 5?",
	},
	{ rus: '(inform me)', eng: 'Let me know if you need a taxi.' },
	{ rus: '', eng: 'Does Tuesday work for you?' },
	{
		rus: '',
		eng:
			'Can we arrange a meeting to discuss any problems that might arise?',
	},
	{
		rus: '',
		eng:
			'I hope we can book a call to iron out any last-minute problems.',
	},

	{
		rus: '',
		eng:
			'I usually arrive at work at about 8:30. // Use present simple to talk about routines.',
	},
	{
		rus: '',
		eng:
			' I work for IBM. // Use present simple to talk about things we think about as permanent.',
	},
	{
		rus: '',
		eng:
			'Paris lies on the River Seine. // Use present simple to talk about states.',
	},
	{
		rus: '',
		eng:
			'The next train leaves at 11:15. // Use present simple to talk about timetabled events in the future.',
	},
	{
		rus: '',
		eng:
			"When I see Margaret tomorrow, I'll give you a ring. // Use present simple to talk about future time introduced by when, as soon, as, after, if, etc.",
	},
	{
		rus: '',
		eng:
			'Common phrases used with present simple are: as a rule, generally (speaking), on the whole, one (a week , in a while), every (winter), most of the time.',
	},
	{
		rus: '',
		eng:
			'Mr. Takashi is waiting for you in Reception. // Use present continuous to talk about an action happening at the moment of speaking.',
	},
	{
		rus: '',
		eng:
			'I am writing a report on the takeover, and I should finish in a few days. // Use present continuous to talk about a project that is ongoing and unfinished.',
	},
	{
		rus: '',
		eng:
			'I am staying with my brother while my house is being redecorated. // Use present continuous to talk about we think as temporary. ',
	},
	{
		rus: '',
		eng:
			'Because of global warming, sea levels are rising slowly. // Use present continuous to talk about a gradual change or development.',
	},
	{
		rus: '',
		eng:
			'I am seeing Mrs. Langer next Tuesday. // Use present continuous to talk about an appointment or arrangement with future reference.',
	},
	{
		rus: '',
		eng:
			'Common phrases used with present continuous are: currently, for the moment, at the moment, for the time being, tomorrow (afternoon), right now.',
	},
	{
		rus:
			"CEO выразил признательность за всю нашу тяжелую работу. // (сказал 'спасибо')",
		eng:
			"The CEO expressed appreciation of all our hard work. // (said 'thank you')",
	},
	{
		rus:
			'В нашей компании внедрена новая система мотивации для поощрения эффективных сотрудников. // (мотивация )',
		eng:
			'A new incentive scheme was introduced in our company to reward efficient employees. // (motivation scheme)',
	},
	{
		rus:
			'Служебный автомобиль, медицинская страховка и бесплатные обеды-это льготы. // (выгоды)',
		eng:
			'A company car, medical insurance and free lunches are perks. // (benefits)',
	},
	{
		rus:
			'Они заслуживают признания за отличную работу, которую они делают. // (похвала и вознаграждение за их работу)',
		eng:
			'They deserve recognition for the great job they are doing. // (praise and reward for their work)',
	},
	{
		rus:
			'В декабре мы обычно получаем ежегодный бонус. // (раз в год)',
		eng:
			'In December we usually receive an annual bonus. // (paid once a year)',
	},
	{
		rus:
			'Я получаю много удовлетворения от помощи людям. // (чувство счастья от того, что вы делаете).',
		eng:
			'I get a lot of fulfilment from helping people. // (a feeling of being happy with what you are doing).',
	},
	{
		rus:
			'Сотрудники хотят большей безопасности труда. // (нет опасности потерять работу)',
		eng:
			'Employees want greater job security. // (not being in danger of losing their jobs)',
	},
	{
		rus:
			'Я работаю по гибкому графику, что означает, что мне не нужно начинать работу рано утром.',
		eng:
			"I work flexible hours, which means I don't have to start work early in the morning.",
	},
	{
		rus:
			'Ваше достижение-это что-то важное, что вам удается сделать своими силами.',
		eng:
			'Your achievement is something important that you succeed in doing by your own efforts.',
	},
	{
		rus:
			'Положительные отзывы и похвалы очень важны, они многое делают для удовлетворения работой. // (слова официального утверждения)',
		eng:
			'Positive feedback and praise are very important, they do a lot for job satisfaction. // (words of approval)',
	},
	{
		rus: 'Приятно быть признанным и признанным за мои достижения.',
		eng:
			"It's nice to be acknowledged and recognized for my achievements.",
	},
	{
		rus:
			'Мы улучшили производительность по всей системе. // (насколько хорошо работает система)',
		eng:
			"We've improved performance throughout the system. // (how well the system works)",
	},
	{
		rus:
			'Самые успешные сотрудники были вознаграждены недельным круизом. // (присуждается приз)',
		eng:
			'The most successful employees were rewarded with a one-week cruise. // (given a prize)',
	},
	{
		rus:
			'Выпускники ИТ имеют много возможностей трудоустройства. // (люди, имеющие высшее образование в области ИТ)',
		eng:
			'IT graduates have a lot of job opportunities. // (people who have a university degree in IT)',
	},
	{
		rus:
			'В начале вашей карьеры очень важно получить практический опыт работы. // (опыт, полученный в результате выполнения работы, а не учебы)',
		eng:
			"At the beginning of your career it's really important to get some hands-on work experience. // (experience gained from doing a job rather than studying)",
	},
	{
		rus:
			'Ненавижу выполнять черную работу. // (работа скучная, не важная и не требующая навыков)',
		eng:
			"I hate doing menial tasks. // (work that is boring, not important and doesn't require any skills)",
	},
	{
		rus:
			'Он много работает, пытается подняться по карьерной лестнице. // (построить успешную карьеру)',
		eng:
			"He's working hard, trying to climb the career ladder. // (build a successful career)",
	},
	{
		rus:
			'Когда я учился в университете, я два месяца проходил стажировку в Google. // (временная работа для студентов, обычно неоплачиваемая)',
		eng:
			'When I was at university, I did an internship with Google for two months. // (a temporary job for students, usually unpaid)',
	},
	{
		rus:
			'Это обучение занимает много времени, но оно принесет вам пользу в долгосрочной перспективе. // (дать вам преимущество, помочь)',
		eng:
			'This training takes a lot of time, but it will benefit you in the long run. // (give you an advantage, help you)',
	},
	{
		rus:
			'Компании ценят самомотивированных сотрудников. // (иметь личную заинтересованность в хорошем выполнении своей работы)',
		eng:
			'Companies value employees who are self-motivated. // (have a personal interest in doing their work well)',
	},
	{
		rus:
			'Мы собираемся провести конкурс для сотрудников, и победитель получит денежное вознаграждение. // (немного денег в качестве приза)',
		eng:
			"We're going to hold a competition for staff and the winner will get a cash reward. // (some money as a prize)",
	},
	{
		rus:
			'Он получил рекомендацию, полную похвалы от своего предыдущего работодателя. // (информация о его способностях и квалификации)',
		eng:
			'He got a reference full of praise from his previous employer. // (information about his abilities and qualifications)',
	},
	{
		rus:
			'Ваши навыки общения могут иметь большое значение на собеседовании // (имеют хороший эффект).',
		eng:
			'Your communication skills could make all the difference at a job interview // (have a good effect).',
	},

	{
		eng: "Hi, I don't think we've met. I'm Paolo from Napoli.",
		rus: 'Привет, не думаю, что мы встречались. Я Паоло из Неаполя.',
	},
	{
		eng: "Hello. It's Adriana, isn't it? We met before dinner.",
		rus:
			'Привет. Это Адриана, не так ли? Мы встретились перед ужином.',
	},
	{
		eng:
			"I saw you sitting at my table at dinner but I didn't have a chance to speak to you.// (there was no opportunity)",
		rus:
			'Я видел, как ты сидел за моим столом за ужином, но у меня не было возможности поговорить с тобой.// (не было возможности)',
	},
	{
		eng: 'Is this your first company event?',
		rus: 'Это ваше первое корпоративное мероприятие?',
	},
	{
		eng:
			'Are you from Calcutta? What a coincidence! My parents are from India, too.',
		rus:
			'Вы из Калькутты? Какое совпадение! Мои родители тоже из Индии.',
	},
	{
		eng:
			'Good evening, Adriana. I thought I might see you here. Back for another company event? // (felt I could meet)',
		rus:
			'Добрый вечер, Адриана. Я думал, что увижу тебя здесь. Вернулся на другое мероприятие компании? // (чувствовал, что могу встретиться)',
	},
	{
		eng:
			"Currently I'm working on pension plans and other savings schemes. //",
		rus:
			'В настоящее время я работаю над пенсионными планами и другими накопительными планами. //(предлог)',
	},
	{
		eng: 'How lovely to see you here. //(nice)',
		rus: 'Как приятно видеть вас здесь. //(приятный)',
	},
	{
		eng: "I have to go. It's been nice talking to you.",
		rus: 'Я должен идти. Было приятно поговорить с тобой.',
	},
	{
		eng:
			"I injured my leg in January in a skiing accident. Oh dear, I'm sorry to hear that!",
		rus:
			'Я повредил ногу в январе в лыжной аварии. О Боже, мне очень жаль это слышать!',
	},
	{
		eng:
			'Have you seen the programme? It looks very entertaining. //(a lot of fun)',
		rus:
			'Вы видели программу? Выглядит очень занимательно. // (очень весело)',
	},
	{
		eng:
			"Apparently, they're interested in people who've worked in different divisions. // (it seems that)",
		rus:
			'Видимо, их интересуют люди, которые работали в разных подразделениях. // (похоже, что)',
	},
	{
		eng: "Hi, I'm Sumitra, based in the UK. // (working)",
		rus:
			'Привет, я Сумитра, базирующаяся в Великобритании. // (рабочий)',
	},
	{
		eng: 'How are things? // (How are you?)',
		rus: 'Как дела? // (Как ты?)',
	},
	{
		eng:
			"My boss and I have a lot in common, so it's easy for us to work together. // (similar interests, attitudes)",
		rus:
			'У нас с боссом много общего, так что нам легко работать вместе. // (схожие интересы, установки)',
	},
	{
		eng:
			'At the beginning of the presentation the speaker made a joke to break the ice. // (to help people to relax)',
		rus:
			'В начале презентации спикер пошутил, чтобы сломать лед. // (чтобы помочь людям расслабиться)',
	},
	{
		eng:
			"By the way, have you seen Ann Smith? I've heard that she's supposed to be at this conference. // (changing the topic of the conversation)",
		rus:
			'Кстати, вы не видели Энн Смит? Я слышал, что она должна быть на этой конференции. // (изменение темы разговора)',
	},
	{
		rus:
			'Когда уезжает Мистер Патель? Вы знаете, когда мистер Патель уезжает?',
		eng:
			'When is Mr Patel leaving? Do you know when Mr. Patel is leaving?',
	},
	{
		rus:
			'Где работает Мистер Элмор?  Не подскажете, где работает Мистер Элмор?',
		eng:
			'Where does Mr Elmore work?  Could you tell me where Mr Elmore works?',
	},
	{
		rus: 'Сколько это стоит? Можете сказать, сколько это стоит?',
		eng: 'How much does it cost? Can you tell me how much it costs?',
	},
	{
		rus:
			'Кто оставил это сообщение? Вы знаете, кто оставил это сообщение?',
		eng:
			'Who left this message? Do you have any idea who left this message?',
	},
	{
		rus: 'Завтра будет дождь? Ты знаешь, будет ли завтра дождь?',
		eng:
			"Is it going to rain tomorrow? Do you know whether it's going to rain tomorrow?",
	},
	{
		rus: 'Разве вы не в Милане?',
		eng: "Aren't you based in Milan?",
	},
	{
		rus:
			'Разве они не продаете аппаратное и программное обеспечение?',
		eng: "Didn't they sell hardware as well as software?",
	},
	{
		rus: 'Вы не можете работать позже?',
		eng: "Can't you work a bit later tonight?",
	},
	{
		rus: '// жалуешься // Ты еще не закончил?',
		eng: "//complain// Haven't you finished yet?",
	},
	{
		rus:
			'// сделайте предложение // Почему бы вам не присоединиться к нам?',
		eng: "//make a suggestion// Why don't you join us?",
	},
	{
		rus: '//проверка информации// Не твое?',
		eng: "//check information// Isn't it yours?",
	},
	{
		rus:
			'// сделать запрос // Можем ли мы присоединиться к вам на встрече?',
		eng: "//make a request// Can't we join you at the meeting?",
	},
	{
		rus:
			'// если утверждение положительное, то тег вопроса отрицательный.//- Жарко, не правда ли?',
		eng:
			"//If the statement is positive, the question tag is negative.// It's hot, isn't it?",
	},
	{
		rus:
			'//Если высказывание отрицательное, общий вопрос является положительным./- Вы не видели мой ключ, не так ли?',
		eng:
			"//If the statement is negative, the question tag is positive.// You haven't seen my key, have you?",
	},
	{
		rus: 'Она не поедет в Китай, не так ли?',
		eng: "She won't go to China, will she?",
	},
	{
		rus: 'Ты умеешь плавать, правда?',
		eng: "You can swim, can't you?",
	},
	{
		rus: 'Вы работаете на Сименса, не так ли?',
		eng: "You work for Simens, don't you?",
	},
	{
		rus: 'Он ушел вчера рано, не так ли?',
		eng: "He left early yesterday, didn't he?",
	},
	{
		rus:
			"// Если объект находится кто-то, кого-либо, вы, все, кто угодно - использовать 'они' в теге./ Кто угодно может воспользоваться комнатой для переговоров, не так ли?",
		eng:
			"// If the subject is someone, sombody, evryone, everybody, anyone, anybody - use 'they' in the tag.// Anyone can use the meeting room, can't they?",
	},
	{
		rus:
			"// если субъект никто, никто - используйте 'они' в теге./- Никто об этом не знал, не так ли?",
		eng:
			"// If the subject is no one, nobody - use 'they' in the tag.// No one knew about that, did they?",
	},

	{
		rus: 'Боюсь, у нас закончились деньги. // (денег не осталось)',
		eng:
			"I'm afraid we've run out of money. // (there is no money left)",
	},
	{
		rus:
			'Постарайтесь отслеживать расходы, чтобы не превышать бюджет. // (монитор)',
		eng:
			"Try to keep track of spending so that you don't go over budget. // (monitor)",
	},
	{
		rus:
			'Когда у вас мало времени, вы должны определить приоритеты задач и сделать самые важные из них в первую очередь.',
		eng:
			'When you are short of time, you have to prioritize tasks and do the most important ones first.',
	},
	{
		rus:
			'Мы ожидаем закончить задачи этого спринта досрочно. // (до запланированного времени)',
		eng:
			'We expect to finish the tasks of this sprint ahead of schedule. // (before the planned time)',
	},
	{
		rus:
			'Мы отстаем от графика, но надеемся наверстать упущенное на этой неделе. // (выполнение работ позднее запланированного срока)',
		eng:
			"We're behind schedule now but hope to catch up with everything this week. // (doing work later than planned)",
	},
	{
		rus:
			'В данный момент все идет гладко. // (все идет по плану, проблем нет)',
		eng:
			"Things are running smoothly at the moment. // (everything's according to plan, there are no problems)",
	},
	{
		rus:
			'Наш менеджер пытается решить любые конфликты сразу. // (иметь дело)',
		eng:
			'Our manager tries to resolve any conflicts straight away. // (deal with)',
	},
	{
		rus:
			'Основная причина задержки-отсутствие планирования. // (недостаточно)',
		eng:
			'The main reason for the delay is lack of planning. // (not enough)',
	},
	{
		rus:
			'Мы не можем пропустить крайний срок. В противном случае мы не получим бонус. // (завершить работу позднее запланированного срока)',
		eng:
			"We can't miss the deadline. Otherwise, we won't receive a bonus. // (complete work later than planned)",
	},
	{
		rus:
			'Как вы думаете, мы сможем уложиться в срок? // (завершение работы в срок или ранее)',
		eng:
			"Do you think we'll be able meet the deadline? // (complete work on time or earlier)",
	},
	{
		rus:
			'Каждый проект имеет бюджетные ограничения. // (ограничения на сумму денег, которую можно потратить)',
		eng:
			'Every project has budget constraints. // (restrictions on the amount of money that can be spent)',
	},
	{
		rus:
			'Нам нужно убедиться, что мы в рамках бюджета. // (не тратьте слишком много денег)',
		eng:
			"We need to make sure that we're within budget. // (don't spend too much money)",
	},
	{
		rus:
			'Для того, чтобы оставаться в рамках бюджета, мы должны разработать лучшее предварительное планирование ресурсов. // (сделано до начала работы)',
		eng:
			'To stay within budget we need to develop better upfront planning of the resources. // (done before starting work)',
	},
	{
		rus:
			'Определите контрольные точки На протяжении всего проекта, чтобы вы могли оставаться на пути. // (вероятность достижения желаемого результата)',
		eng:
			'Define checkpoints throughout the project so you can stay on track. // (be likely to achieve the result you want)',
	},
	{
		rus:
			'Нам нужно немедленно начать решать проблему. // (начать пытаться решить)',
		eng:
			'We need to address the problem immediately. // (start trying to solve it)',
	},
	{
		rus:
			'Точный прогноз поможет нам уложиться в сроки. // (правильно и верно в каждой детали)',
		eng:
			'An accurate forecast will help us meet our deadlines. // (correct and true in every detail)',
	},
	{
		rus: 'У нас возникли проблемы с новой системой. // (предлог)',
		eng: "We've run into problems with the new system. // ",
	},
	{
		rus:
			'У нас ограниченный бюджет, поэтому давайте постараемся снизить расходы. // (как можно ниже)',
		eng:
			"We have a limited budget, so let's try to keep the costs down. // (as low as possible)",
	},
	{
		rus:
			'Прежде чем начать новый проект, важно установить реалистичный бюджет. // (выделить сумму денег, которой будет достаточно для завершения проекта)',
		eng:
			"Before you start a new project, it's essential to set a realistic budget. // (allocate a sum of money that will be enough for completing the project)",
	},
	{
		rus:
			'Компания предлагает новый ассортимент мобильных телефонов по конкурентоспособным ценам. // (дешевле, чем другие, но все еще хорошего качества)',
		eng:
			'The company offers a new range of mobile phones at competitive prices. // (cheaper than others but still of good quality)',
	},
	{
		rus:
			'Мы отстаем от графика, поэтому нам придется работать сверхурочно, чтобы сделать дату запуска. // (выпуск продукта вовремя)',
		eng:
			"We're behind schedule, so we'll have to work overtime in order to make the launch date. // (release the product on time)",
	},
	{
		rus:
			'Если мы сейчас превысим бюджет, у нас закончатся деньги к концу проекта. // (потратить больше денег, чем первоначально планировалось)',
		eng:
			"If we go over budget now, we'll run out of money by the end of the project. // (spend more money than initially planned)",
	},
	{
		rus:
			'В прошлом месяце мы отстали от графика из-за неожиданных задержек в сборе требований, но теперь мы снова в пути.',
		eng:
			"Last month we fell behind schedule due to unexpected delays in collecting requirements, but we're back on track now.",
	},
	{
		rus:
			'Я представил свои идеи руководству, и они дали мне добро. // (разрешение на запуск)',
		eng:
			"I've presented my ideas to the management and they've given me the go ahead. // (permission to start)",
	},
	{
		rus:
			'Фрэнк опоздает, но мы все равно продолжим встречу. // (начать собрание, как запланировано)',
		eng:
			"Frank will be late, but we'll go ahead with the meeting anyway. // (start the meeting as planned)",
	},
	{
		rus:
			'Вчера я отправил вам предложенную повестку дня. // (перечень тем для обсуждения на совещании)',
		eng:
			'I sent you a proposed agenda yesterday. //( a list of subjects to discuss at a meeting)',
	},
	{
		rus:
			'Цель сегодняшнего заседания-информировать друг друга о достигнутом прогрессе. //( цель)',
		eng:
			"The purpose of today's meeting is to update each other on progress. //( goal)",
	},
	{
		rus:
			'До сих пор дата запуска назначена на 15 ноября. //( дата выпуска )',
		eng:
			'Up to now the launch date has been set for the 15th of November. //( the release date)',
	},
	{
		rus:
			'Мы забронировали место проведения конференции две недели назад. // (место проведения мероприятия)',
		eng:
			'We booked the venue for the conference two weeks ago. //( a place for an event)',
	},
	{
		rus:
			'Все не так гладко, как мы надеялись. //( не достаточно хорошо )',
		eng:
			"Things aren't running as smoothly as we hoped. //( aren't going well enough)",
	},
	{
		rus: 'У нас проблема с новой функциональностью. //( faced)',
		eng: "We've hit a problem with the new functionality. //( faced)",
	},
	{
		rus:
			'Мы находимся на пути с развертыванием функции. //( все идет по плану)',
		eng:
			"We're on track with deploying the feature. //( everything's going according to plan)",
	},
	{
		rus: 'Как выглядит ваша сторона вещей? //( ваш взгляд)',
		eng: 'How does your side of things look? //( your view)',
	},
	{
		rus:
			'Как продвигается рекламная кампания? //( достижение прогресса)',
		eng:
			"How's the advertising campaign coming along? //( making progress)",
	},
	{
		rus: 'И как далеко вы продвинулись в подготовке к запуску?',
		eng:
			'And how far are you with preparations for the launch party? // ',
	},

	{
		rus:
			'Каково текущее состояние нагрузочного тестирования? //( существующий сейчас)',
		eng:
			"What's the current status of the load testing? //( existing now)",
	},
	{
		rus: 'Что именно вы имеете в виду? (просьба разъяснить)',
		eng: 'What do you mean exactly? (please clarify)',
	},
	{
		rus:
			'Итак, настоящая проблема заключается в производителях батарей? //( из-за )',
		eng:
			'So the real problem lies with the battery manufacturers? //( is because of)',
	},
	{
		rus:
			'Почему бы нам не подождать и не посмотреть, что предлагают техники? //( давайте)',
		eng:
			"Why don't we wait and see what the technicians suggest? //( let's)",
	},
	{
		rus: 'Меня это не убеждает. //( не уверенный)',
		eng: "I'm not convinced. //( not certain)",
	},
	{
		rus:
			'Это стоит попробовать. // (это хорошая идея, чтобы попробовать)',
		eng: "It's worth a try. //( it's a good idea to try it)",
	},
	{
		rus: 'Наши инженеры изучают проблему. // (исследование; предлог)',
		eng:
			'Our engineers are looking into the problem. //( investigating; preposition)',
	},
	{
		rus: 'Возможно, придется перенести запуск. // (изменить дату)',
		eng:
			'We may have to reschedule the launch party. //( change the date)',
	},
	{
		rus:
			'Батарея может иссякнуть в 6 часов если свои ключевые характеристики в постоянно используются. (используйте всю энергию; предлог)',
		eng:
			'The battery can run out in six hours if its key features are in permanent use. // (use all the energy; preposition)',
	},
	{
		rus:
			'Использование другого телефона для запуска было бы моим предложением. //( будет предложение)',
		eng:
			'Using a different phone for the launch would be my proposal. //( will be suggestion)',
	},
	{
		rus:
			'Если вы спрашиваете меня, то мы должны обсудить вопрос с клиентом. //( на мой взгляд)',
		eng:
			'If you ask me, we should discuss the issue with the customer. //( in my opinion)',
	},
	{
		rus: 'Можно ли решить эту проблему?',
		eng: 'Can this problem be resolved? // fixed ',
	},
	{
		rus:
			'Почему бы нам не подождать и не посмотреть, что предлагают техники?',
		eng: "Why don't we wait and see what the technicians suggest?",
	},
	{
		rus:
			'Как далеко вы продвинулись в подготовке к демо? /(каков ваш прогресс?)',
		eng:
			"How far are you with preparing for the demo? //( what's your progress?)",
	},
	{
		rus: 'Have you seen Anna this morning? (It is still morning)',
		eng:
			"Tom is looking for his key. He can't find it. He has lost his key. //present perfect// This means that he doesn't have his key now.",
	},
	{
		rus:
			'Том ищет свой ключ. Он не может его найти. Он потерял свой ключ. //present perfect// это означает, что у него нет ключа.',
		eng:
			"Tom is looking for his key. He can't find it. He has lost his key. //present perfect// This means that he doesn't have his key now.",
	},
	{
		rus:
			'Теперь Том нашел свой ключ. Теперь он у него. Он потерял уже свой ключ? Нет, он уже нашел его. Он потерял свой ключ? Да, это так. Он потерял свой ключ, но теперь он нашел его.',
		eng:
			'Now Tom has found his key. He has it now. Has he lost his key? No, he has found it. Did he lose his key? Yes, he did. He lost his key. //past simple// but now he has found it. //present perfect//',
	},
	{
		rus:
			'Сегодня я проделал большую работу. // Используйте present perfect в течение периода времени, который продолжается до сих пор. Например: сегодня , на этой неделе , с 2007 года.',
		eng:
			"I've done a lot of work today. //Use present perfect for a period of time that continues until now. For example: today , this week , since 2007.",
	},
	{
		rus:
			'Я вчера много работал.// Мы используем прошлое простое для законченного времени в прошлом. Например: вчера,на прошлой неделе,с 2007 по 2010 год.',
		eng:
			'I did a lot of work yesterday.// We use the past simple for a finished time in the past. For example: yesterday,last week,from 2007 to 2010.',
	},

	{
		rus: 'На этой неделе не было дождя.',
		eng: "It hasn't rained this week.",
	},
	{
		rus: 'Вы видели Анну сегодня утром? (Еще утро)',
		eng: 'Have you seen Anna this morning? (It is still morning)',
	},
	{
		rus: 'Ты видела Тима в последнее время?',
		eng: 'Have you seen Tim recently?',
	},
	{
		rus: 'На прошлой неделе дождя не было.',
		eng: "It didn't rain last week.",
	},
	{
		rus: 'Вы видели Анну сегодня утром? (Сейчас полдень вечера)',
		eng:
			'Did you see Anna this morning? (It is now afternoon or evening)',
	},
	{
		rus: 'Вы видели Тима в воскресенье?',
		eng: 'Did you see Tim on Sunday?',
	},
	{
		rus:
			'Ты много путешествовала, Джейн? Джейн: Да,я бывала во многих местах. Дэйв: Серьезно? Вы когда-нибудь были в Китае? Джейн: Да, я была в Китае дважды. Дэйв: а как насчет Индии? Джейн: Нет, я не была в Индии. Здесь Дэйв и Джейн говорят о местах, где Джейн побывала в ее жизни, это период времени, который продолжается до сих пор.',
		eng:
			"Have you travelled a lot, Jane? Yes,I've been to lots of places. Really? Have you ever been to China? Yes, I've been to China twice. What about India? No, I haven't been to India. Here, Dave and Jane are talking about the places Jane has visited in her life, which is a period of time that continues until now.",
	},
	{
		rus: 'Вы когда-нибудь ели икру?',
		eng: 'Have you ever eaten caviar?',
	},
	{
		rus: 'У нас никогда не было машины.',
		eng: "We've never had a car.",
	},
	{
		rus:
			"Вы читали 'Гамлета'? Нет, я не читал ни одной пьесы Шекспира.",
		eng:
			"Have you read Hamlet? No, I haven't read any of Shakespeare's plays.",
	},
	{
		rus:
			'Сьюзан очень нравится этот фильм. Она смотрела его восемь раз!',
		eng: "Susan really loves that film. She's seen it eight times!",
	},
	{
		rus:
			'Какой скучный фильм! Это самый скучный фильм, который я когда-либо видел.',
		eng:
			"What a boring film! It's the most boring film I've ever seen.",
	},
	{
		rus: 'Я никогда не был в Китае. Вы там бывали?',
		eng: "I've never been to China. Have you been there?",
	},
	{
		rus: 'Вы слышали что-нибудь от Брайана в последнее время?',
		eng: 'Have you heard anything from Brian recently?',
	},
	{
		rus: 'Я встретил много людей за последние несколько дней.',
		eng: "I've met a lot of people in the last few days.",
	},
	{
		rus: 'Все идет хорошо. У нас пока не было никаких проблем.',
		eng:
			"Everything is going well. We haven't had any problems so far.",
	},
	{
		rus: 'Я голоден. Я ничего не ел с самого завтрака.',
		eng:
			"I'm hungry. I haven't eaten anything since breakfast. // past ( from breakfast until now)",
	},
	{
		rus: 'Хорошо увидеть тебя снова. Мы давно не виделись.',
		eng:
			"It's good to see you again. We haven't seen each other for a long time.",
	},
	{
		rus:
			'Таким же образом мы используем настоящее совершенное время с сегодняшним днем /вечером /в этом году и т. д. когда эти периоды не закончены в момент выступления.',
		eng:
			'In the same way we use the present perfect with today /this evening /this year etc. when these periods are not finished at the time of speaking.',
	},
	{
		rus: 'Я выпил сегодня четыре чашки кофе.',
		eng: "I've drunk four cups of coffee today.",
	},
	{
		rus: 'У вас был отпуск в этом году?',
		eng: 'Have you had a holiday this year?',
	},
	{
		rus: 'Я не видела Тома сегодня утром. А ты?',
		eng: "I haven't seen Tom this morning. Have you?",
	},
	{
		rus: 'Роб не очень много работал в этом семестре.',
		eng: "Rob hasn't worked very hard this term.",
	},
	{
		rus: 'Мы говорим: это первый раз, когда что-то произошло.',
		eng: "We say: It's the first time something has happened.",
	},

	{
		rus:
			'У Дона урок вождения. Это его первый урок. Это первый раз, когда он водит машину. Он никогда раньше не водил машину.',
		eng:
			"Don is having a driving lesson. It's his first one. It's the first time he has driven a car. //(not drives)//. He has never driven a car before.",
	},
	{
		rus:
			'Сара снова потеряла паспорт. Это уже второй раз, как это происходит .',
		eng:
			'Sarah has lost her passport again. This is the second time this has happened. //(not happens)',
	},
	{
		rus:
			'Билл снова звонит своей девушке. Это уже третий раз он звонит ей за вечер.',
		eng:
			"Bill is phoning his girlfriend again. That's the third time he's phoned her this evening.",
	},
	{
		rus:
			'Вчера Карен и Джим играли в теннис. Они начались в 10 часов и закончили в 11:30. Так, в 10:30 они играли в теннис. Они играли значит они были в середине игры. Они еще не закончили играть.',
		eng:
			"Yesterday Karen and Jim played tennis. They started at 10 o'clock and finished at 11:30. So, at 10:30 they were playing tennis.They were playing means they were in the middle of playing. They had not finished playing.",
	},
	{
		rus: 'Я начал делать. Я делал это. Я закончил работу. Сейчас.',
		eng: 'I started doing. I was doing. I finished doing. Now.',
	},
	{
		rus: 'В это время в прошлом году я жил в Бразилии.',
		eng: 'This time last year I was living in Brazil.',
	},
	{
		rus: 'Что вы делали в 10 часов вчера вечером?',
		eng: "What were you doing at 10 o'clock last night?",
	},
	{
		rus:
			'Сравните прошлое непрерывное (я делал) и прошлое простое (я делал).',
		eng:
			'Compare the past continuous (I was doing) and past simple (I did).',
	},
	{
		rus:
			'Я шёл домой, когда встретил Дэна. (в середине прогулки домой)',
		eng:
			'I was walking home when I met Dan. (in the middle of walking home)',
	},
	{
		rus: 'Кейт смотрела телевизор, когда мы приехали.',
		eng: 'Kate was watching TV when we arrived.',
	},
	{
		rus:
			'Я пошел домой после вчерашней вечеринки. ( полностью, полностью)',
		eng:
			'I walked home after the party last night. ( all the way, completely)',
	},
	{
		rus:
			'Кейт много смотрела телевизор, когда болела в прошлом году.',
		eng: 'Kate watched television a lot when she was ill last year.',
	},
	{
		rus:
			'Мы часто используем прошлое простое и прошлое непрерывное вместе, чтобы сказать, что что-то произошло в середине чего-то еще: Мэтт позвонил, когда мы ужинали.',
		eng:
			'We often use the past simple and the past continuous together to say that something happened in the middle of something else: Matt phoned while we were having dinner.',
	},
	{
		rus: 'Когда я встал, шел дождь.',
		eng: 'It was raining when I got up.',
	},
	{
		rus:
			'Я видел тебя вчера в парке. Ты сидел на траве и читал книгу.',
		eng:
			'I saw you in the park yesterday. You were sitting on the grass and reading a book.',
	},
	{
		rus: 'Я повредил спину, когда работал в саду.',
		eng: 'I hurt my back while I was working in the garden.',
	},
	{
		rus:
			'Но мы используем прошлое просто, чтобы сказать, что одно произошло за другим: я шел по дороге, когда увидел Дэна. Поэтому я остановился, и мы поболтали.',
		eng:
			'But we use the past simple to say that one thing happened after another: I was walking along the road when I saw Dan. So I stopped, and we had a chat.',
	},
	{
		rus:
			'Когда Карен приехала, мы ужинали. ( мы уже начали, прежде чем она приехала)',
		eng:
			'When Karen arrived, we were having dinner. ( we had already started before she arrived)',
	},
	{
		rus:
			'Когда Карен приехала, мы ужинали. (Карен приехала, а потом мы поужинали)',
		eng:
			'When Karen arrived, we had dinner. ( Karen arrived, and then we had dinner)',
	},
	{
		rus:
			'Некоторые глаголы (например, знать и хотеть) обычно не используются в непрерывном.',
		eng:
			'Some verbs (for example, know and want) are not normally used in the continuous.',
	},
	{
		rus:
			'Мы были хорошими друзьями. Мы хорошо знали друг друга. (мы не знали, что)',
		eng:
			'We were good friends. We knew each other well. (not We were knowing)',
	},
	{
		rus:
			'Я наслаждалась вечеринкой, но Крис хотел домой. (не было желающих)',
		eng:
			'I was enjoying the party, but Chris wanted to go home. // (not was wanting)',
	},
	{
		rus:
			'Я видел Сью вчера в городе, но она не видела меня. Она смотрела в другую сторону.',
		eng:
			"I saw Sue in town yesterday, but she wasn't seeing me. She was looking the other way. I waved to her, but she wasn't looking.",
	},
	{
		rus:
			'Я встретил Тома и Джейн в аэропорту несколько недель назад. Они собирались в Париж, а я собирался в Рим. Мы поболтали, пока ждали наших рейсов.',
		eng:
			'I met Tom and Jane at the airport a few weeks ago. They were going to Paris and I was going to Rome. We had a chat while we were waiting for our flights.',
	},
	{
		rus:
			'Вчера я ехал на велосипеде домой, когда мужчина выходил на дорогу передо мной. Я ехал довольно быстро, но, к счастью, успел вовремя остановиться и не ударил его.',
		eng:
			'I cycled home yesterday when a man was stepping out into the road in front of me. I was going quite fast, but luckily I managed to stop in time and not hit him.',
	},

	{
		rus:
			"Мы используем 'can', чтобы сказать, что что-то возможно или разрешено, или что у кого-то есть способность делать нечто. Мы используем 'can' + инфинитив (can do, can see etc.).",
		eng:
			"We use 'can' to say that something is possible or allowed, or that somebody has the ability to do something. We use 'can' + infinitive (can do, can see etc.).",
	},
	{
		rus: 'Мы можем видеть озеро из нашего отеля.',
		eng: 'We can see the lake from our hotel.',
	},
	{
		rus: 'У меня нет ручки. - Ты можешь воспользоваться моей.',
		eng: "I don't have a pen. - You can use mine.",
	},
	{
		rus: 'Вы говорите на иностранных языках?',
		eng: 'Can you speak any foreign languages?',
	},
	{
		rus: 'Я могу прийти к вам завтра, если хотите.',
		eng: 'I can come and see you tomorrow if you like.',
	},
	{
		rus: "Слово 'сон' может быть существительным или глаголом.",
		eng: "The word 'dream' can be a noun or a verb.",
	},
	{
		rus: 'Боюсь, я не смогу прийти на вечеринку в пятницу.',
		eng: "I'm afraid I can't come to the party on Friday.",
	},
	{
		rus:
			"Вы можете сказать, что кто-то 'is able' что-то сделать, но 'can' более обычно.",
		eng:
			"You can say that somebody 'is able' to do something, but 'can' is more usual.",
	},
	{
		rus: 'Мы можем увидеть озеро из нашего отеля.',
		eng: 'We are able to see the lake from our hotel.',
	},
	{
		rus:
			"'can' имеет только две формы: может (Настоящее) и может (прошлое). Поэтому иногда необходимо использовать (быть) в состоянии.",
		eng:
			"'can' has only two forms: can (present) and could (past). So sometimes it is necessary to use (be) able to.",
	},
	{
		rus: 'Я не могу уснуть.  В последнее время я не могу заснуть.',
		eng: "I can't sleep. ( I haven't been able to sleep recently. )",
	},
	{
		rus: 'Том может прийти завтра.  Том мог бы прийти завтра.',
		eng:
			'Tom can come tomorrow. ( Tom might be able to come tomorrow.)',
	},
	{
		rus:
			'Мария говорит на французском, испанском и английском языках. ( Кандидаты на работу должны уметь говорить на двух иностранных языках.)',
		eng:
			'Maria can speak French, Spanish and English. Applicants for the job must be able to speak two foreign languages.',
	},
	{
		rus:
			"Иногда 'could' это прошедшее время от 'can'. особенно с: вижу, слышу запах, вкус, чувствовать, помнить, понимать. У нас был прекрасный номер в гостинице. Мы могли видеть озеро.",
		eng:
			"Sometimes 'could' is the past of 'can'. Especially this is with: see, hear, smell, taste, feel, remember, understand. We had a lovely room in the hotel. We could see the lake.",
	},
	{
		rus: 'Как только я вошел в комнату, я почувствовал запах газа.',
		eng: 'As soon as I walked into the room, I could smell gas.',
	},
	{
		rus: 'Я сидел в задней части театра и не слышали.',
		eng:
			"I was sitting at the back of the theatre and couldn't hear very well.",
	},
	{
		rus:
			'Мы также используем "could" бы сказать, что кто-то имел общую способность или разрешение сделать что-то:',
		eng:
			'We also use could to say that somebody had the general ability or permission to do something:',
	},
	{
		rus: 'Мой дед говорил на пяти языках.',
		eng: 'My grandfather could speak five languages.',
	},
	{
		rus:
			'Мы были абсолютно свободны. Мы могли делать, что хотели. (нам разрешили это сделать)',
		eng:
			'We were totally free. We could do what we wanted. (we were allowed to do)',
	},
	{
		rus:
			"Мы используем 'could' для общей способности. Но если вы хотите сказать, что кто-то сделал что-то в конкретной ситуации, используйте 'was/were able to' или 'managed to' (не 'could'):",
		eng:
			"We use 'could' for general ability. But if you want to say that somebody did something in a specific situation, use 'was/were able to' or 'managed to' (not could):",
	},
	{
		rus:
			'Огонь распространился по зданию очень быстро, но, к счастью, все смогли спастись ( удалось спастись, не удалось спастись).',
		eng:
			'The fire spread through the building very quickly, but fortunately everybody was able to escape ( managed to escape, not could escape).',
	},
	{
		rus:
			'Мы не знали, где Дэвид, но нам удалось найти его в конце концов. (не смог найти)',
		eng:
			"We didn't know where David was, but we managed to find him in the end ( were able to find him in the end. not could find him in the end)",
	},
	{
		rus:
			'Джек был отличным теннисистом, когда был моложе. Он мог победить кого угодно. (у него была общая способность победить кого угодно), но вчера Джек и Энди сыграли матч. Энди играл хорошо, но Джеку удалось обыграть его. ( на этот раз ему удалось победить его)',
		eng:
			'Jack was an excellent tennis player when he was younger. He could beat anybody. (he had the general ability to beat anybody) But Jack and Andy played a match yesterday. Andy played well, but Jack managed to beat him. ( he managed to beat him this time)',
	},
	{
		rus:
			'Негатив не мог (не мог) возможен во всех ситуациях: мой дед не умел плавать.',
		eng:
			"The negative couldn't (could not) is possible in all situations: My grandfather couldn't swim.",
	},
	{
		rus: 'Мы искали Дэвида повсюду, но не могли его найти.',
		eng: "We looked for David everywhere, but we couldn't find him.",
	},
	{
		rus: 'Энди играл хорошо, но он не мог победить Джека.',
		eng: "Andy played well, but he couldn't beat Jack.",
	},
	{
		rus:
			'Мы очень ценим возможность работать с вашей компанией. //спасибо тебе)',
		eng:
			'We really appreciate the opportunity to work with your company. //thank you)',
	},
	{
		rus:
			'В этой презентации я хотел бы показать вам основные возможности нашей новой системы.',
		eng:
			"What I'd like to do in this presentation is show you the main features of our new system.",
	},
	{
		rus:
			'В принципе, это система безопасности, основанная на сканировании отпечатков пальцев. //проще говоря)',
		eng:
			"Basically, it's a security system based on fingerprint scanning. //to put it simply)",
	},
	{
		rus: 'Это довольно простая концепция. //идея)',
		eng: "It's a pretty simple concept. //idea)",
	},
	{
		rus:
			'Во-первых, я дам вам краткий обзор продукции. //краткое описание, которое дает основные идеи)',
		eng:
			"First, I'll give you a brief overview of the product. //a short description that gives the main ideas)",
	},
	{
		rus:
			'С вашей текущей системой вы не можете идентифицировать человека в безопасной зоне. //система, которую вы используете сейчас)',
		eng:
			"With your current system you can't identify the person in the secure area. //the system that you're using now)",
	},
	{
		rus:
			'Теперь вы можете только сказать, что кто-то находится в безопасной зоне, в то время как в будущем вы сможете точно сказать, кто этот человек. //отличие)',
		eng:
			"Now you can only tell that someone is in a secure area, whereas in the future, you'll be able to tell exactly who that person is. //contrast)",
	},
	{
		rus:
			'Теперь я хотел бы перейти к некоторым другим преимуществам нашего продукта. //начать говорить о новой теме)',
		eng:
			"Now I'd like to move on to some other advantages of our product. //start talking about a new subject)",
	},
	{
		rus:
			'Другим важным преимуществом системы является ее гибкость. //важный, главный)',
		eng:
			'The other major advantage of the system is its flexibility. //important, main)',
	},
	{
		rus: 'Это звучит нормально?',
		eng: 'Does that sound ok?',
	},
	{
		rus:
			'Давайте посмотрим, что DiScan может предложить. //может обеспечить)',
		eng: "Let's look at what DiScan has to offer. //can provide)",
	},
	{
		rus:
			'С новой системой вы можете обрабатывать информацию гораздо быстрее.',
		eng:
			'With the new system you can process the information much faster.',
	},
	{
		rus: 'И вот еще одна интересная вещь о новом приложении.',
		eng: "And here's another great thing about the new application.",
	},
	{
		rus:
			'DiScan2 весьма безопасно по сравнению с вашей настоящей системой где код необходим. //показывает разницу)',
		eng:
			'DiScan2 is extremely secure in comparison to your current system where the code is needed. //showing the difference)',
	},
	{
		rus:
			'Самое большое потенциальное преимущество заключается в том, что вы также можете использовать приложение в автономном режиме.//возможное преимущество)',
		eng:
			'The biggest potential benefit is that you can use the application off-line, too. //possible advantage)',
	},
	{
		rus:
			'Прежде всего, я хотел бы поблагодарить вас за приглашение. //для начала)',
		eng:
			"First of all, I'd like to thank you for inviting me here today. //to start with)",
	},
	{
		rus:
			'Подводя итог, использование Agile поможет вам повысить производительность команды. //резюмировать)',
		eng:
			'To sum up, using Agile will help you to enhance the team performance. //to recap)',
	},

	{
		rus: 'В этой презентации я хотел бы сделать три вещи.',
		eng: "What I'd like to do in this presentation is three things.",
	},
	{
		rus: 'обходить, приближаться',
		eng: 'get around',
	},
	{
		rus: 'вызвать, осуществлять, быть причиной',
		eng: 'bring about',
	},
	{ rus: 'придумывать', eng: 'come up with' },
	{
		rus: 'продвигать, принять, проводить',
		eng: 'take forward',
	},
	{ rus: 'окупиться', eng: 'pay off' },
	{ rus: 'проводить', eng: 'carry out' },
	{ rus: 'снизить', eng: 'bring down' },
	{
		rus: 'рассмотреть, приступить к рассмотрению, заняться',
		eng: 'take up',
	},
	{
		rus: 'устанавливать, учреждать, открывать',
		eng: 'set up',
	},
	{
		rus:
			'Я подумываю уйти из компании, чтобы открыть собственный бизнес.',
		eng:
			"I'm thinking of leaving the company to set up my own business.",
	},
	{
		rus:
			'Мы превысисли бюджет на этот проект - нам нужно что-то сделать, чтобы снизить расходы.',
		eng:
			"We're over budget on this project - we need to do something to bring down the costs.",
	},
	{
		rus:
			'Это отличная идея - я знал, что ты придумаешь план решения проблемы.',
		eng:
			"That's great idea - I knew you would come up with a plan to solve the problem.",
	},
	{
		rus:
			'Я очень рад, что компания приняла вызов рекрутинга по всему ЕС.',
		eng:
			"I'm really pleased the company has taken up to the challenge of the recruiting across the EU.",
	},
	{
		rus: 'Мы провели много тестов перед запуском продукта.',
		eng:
			'We carried out a lot of tests before we launch the product.',
	},
	{
		rus:
			'Обеспокоенность по поводу глобального потепления привела к ряду изменений в экологических руководствах.',
		eng:
			'Concern about global warming has brought about a number of changes to environmental guides.',
	},
	{
		rus:
			'Мы вложили много денег в эту идею - надеюсь, что инвестиции окупятся.',
		eng:
			'We put a lot of money into this idea - hopefully the investment will pay off.',
	},
	{
		rus:
			'Мы обошли проблему перемещения дополнительного персонала, набрав местный персонал.',
		eng:
			'We got around the problem of relocation extra staff by recruiting locally.',
	},
	{
		rus:
			'Первый этап проекта прошел хорошо, и сейчас мы продвигаем наши планы на следующий этап.',
		eng:
			"The first stage of the project went well, and we're now taking forward our plans for the next stage.",
	},
	{
		rus:
			'И я настоятельно призываю вас продвигать вперед насущную работу Конференции в духе компромисса и согласия.',
		eng:
			'I urge you to take forward the vital work of the Conference in a spirit of compromise and accommodation.',
	},
	{
		rus:
			'Германия проголосовала за резолюцию 68/46, касающуюся продвижения вперед процесса ядерного разоружения.',
		eng:
			'Germany voted in favour of resolution 68/46 to take forward nuclear disarmament.',
	},
	{
		rus:
			'И он рассчитывает поступательно продвигать эти усилия на всем протяжении 2010 года.',
		eng: 'He is looking to take forward this effort throughout 2010.',
	},
	{
		rus:
			'Он пытался заблокировать все мои аккаунты, как будто я не смогу обойти родительский контроль.',
		eng:
			"He tried blocking all of my accounts, like I can't get around parental controls.",
	},
	{
		rus: 'Том не может передвигаться без инвалидной коляски.',
		eng: "Tom can't get around without a wheelchair.",
	},
	{
		rus: 'Она больше не может передвигаться.',
		eng: "She can't get around anymore.",
	},

	{
		rus:
			'Одна из присущих промышленно развитым странам проблем заключается в том, что работодатели могут обходить законодательство, реклассифицируя рабочие места.',
		eng:
			'One problem in industrialized countries is that employers can get around legislation by re-labelling jobs.',
	},
	{
		rus:
			'Эти возможности могут обеспечить ускорение процесса получения выгод от развития.',
		eng:
			'These opportunities can bring about accelerated developmental gains.',
	},
	{
		rus: 'Всё, что мы можем сделать - это продолжать в том же духе.',
		eng: 'All we can do is carry on.',
	},
	{
		rus:
			'Потому что ваше лицо выглядит так, как будто вы хотите продолжать говорить.',
		eng:
			'Because your face looks like it wants to carry on speaking.',
	},
	{
		rus: 'Он предложил Бюро заняться этим вопросом.',
		eng: 'He suggested that the Bureau take up this issue.',
	},
	{
		rus:
			'Рабочая группа также обсудила вопрос о том, какой общий комментарий следует рассмотреть Комитету в следующий раз.',
		eng:
			'The Working Group had also considered which general comment the Committee should take up next.',
	},
	{
		rus: 'Существительное может быть счетным или несчетным.',
		eng: 'A noun can be countable or uncountable.',
	},
	{
		rus:
			'Он чувствует сильную ответственность перед сотрудниками своего стартапа. // (=обязанность заботиться и помогать)',
		eng:
			'He feels a strong sense of responsibility towards the employees of his start-up. // (=duty to care and help)',
	},
	{
		rus:
			'Мы пытаемся уменьшить воздействие производственного процесса на окружающую среду. // (=влияние)',
		eng:
			"We're trying to reduce the impact that our manufacturing process has on the environment. // (=influence)",
	},
	{
		rus:
			'Наши сотрудники жертвуют время и деньги на благотворительные проекты.',
		eng: 'Our employees donate time and money to charity projects.',
	},
	{
		rus:
			'Мы остаемся верны нашим ценностям и принципам. // (предлог)',
		eng: 'We stay true to our values and principles. // ',
	},
	{
		rus:
			'У нас всегда была сильная приверженность к нашей рабочей силе.',
		eng: "We've always had a strong commitment to our workforce.",
	},
	{
		rus:
			'Все сотрудники должны соблюдать правила и положения компании. // (=следовать)',
		eng:
			'All members of staff should comply with company rules and regulations. // (=follow)',
	},
	{
		rus:
			'Вы никогда не должны принимать дорогие подарки, чтобы избежать обвинения в подкупе. // (=коррупция)',
		eng:
			'You should never accept expensive gifts to avoid being charged with bribery. // (=corruption)',
	},
	{
		rus:
			'Это предубеждение против женщин в нем не принесет никакой пользы. // (=несправедливые мнения, не основанные на знаниях)',
		eng:
			"This prejudice against women in IT won't do any good. // (=unfair opinions not based on knowledge)",
	},
	{
		rus:
			'Эта глупая жалоба не может подорвать доверие Джека. // (=тот факт, что ему можно доверять, его честность)',
		eng:
			"This silly complaint can't undermine Jack's credibility. // (=that fact that he can be trusted, his honesty)",
	},
	{
		rus:
			'Я хотел бы поблагодарить всех за проявленную приверженность. // (=энтузиазм упорно трудиться)',
		eng:
			"I'd like to thank everybody for having shown such commitment. // (=enthusiasm to work hard)",
	},
	{
		rus:
			'В развивающихся странах глобализация рассматривается как посягательство на традиционные культурные ценности. // (=принципы, убеждения)',
		eng:
			'In the developing world, globalization is seen as an attack on traditional cultural values. // (=principles, beliefs)',
	},
	{
		rus:
			'Тим был виновен в обмане, преувеличивая цифры перед клиентом.// (=сокрытие правды)',
		eng:
			'Tim was guilty of deception by exaggerating figures in front of the customer.// (=hiding the truth)',
	},
	{
		rus:
			'Просто ничто не могло удовлетворить жадность Мистера Мориарти к власти.// (=сильное желание получить больше)',
		eng:
			"Simply nothing would satisfy Mr.Moriarty's greed for power.// (=a strong desire to get more)",
	},
	{
		rus:
			'Кажется, ваш друг воспользовался вашей щедростью.// (=желание помочь и поделиться)',
		eng:
			'Your friend seems to take advantage of your generosity.// (=desire to help and share)',
	},
	{
		rus:
			'Наша деятельность приводит к загрязнению как побочный продукт, поэтому мы стараемся действовать ответственно и использовать экологически чистые технологии.// (=работайте разумно и будьте надежны)',
		eng:
			'Our business activity creates pollution as a by-product, so we try to act responsibly and use eco-friendly technologies.// (=work in a sensible way and be reliable)',
	},
	{
		rus:
			'Я управляю этой компанией более 10 лет и горжусь этим. // (=управляющий)',
		eng:
			"I have been running this company for more than 10 years and I'm proud of it. // (=managing)",
	},

	{
		rus:
			'маршрут - план или список мест, которые вы посетите в путешествие',
		eng:
			'itinerary - a plan or list of the places you will visit on a journey',
	},
	{
		rus:
			'Этот визит даст вам реальное представление о нашей повседневной работе // (=четкое понимание)',
		eng:
			'This visit will give you a real insight into our daily work. // (=clear understanding)',
	},
	{
		rus:
			'Поездка будет включать в себя много автомобильных поездок. //(=включать)',
		eng: 'The trip will involve a lot of road travel. //(=include)',
	},
	{
		rus:
			'Мы настоятельно рекомендуем вам остаться с нашим гидом. // (=Я вам очень советую)',
		eng:
			'We strongly recommend you stay with our guide. // (=I advise you that very much)',
	},
	{
		rus:
			'С удовольствием познакомлю вас со своей командой. // (=очень счастливый)',
		eng:
			"I'd be delighted to introduce you to my team. // (=very happy)",
	},
	{
		rus:
			'Достопримечательности нашего города стоит посетить. // (=это хорошая идея, чтобы посетить их.)',
		eng:
			"The sights of our city are well worth a visit. // (=it's a good idea to visit them.)",
	},
	{
		rus:
			'Давайте просто пробежимся по маршруту вашей поездки. // (=читать быстро и объяснить)',
		eng:
			"Let's just run through the itinerary of your trip. // (=read quickly and explain)",
	},
	{
		rus:
			'Не стесняйтесь задавать любые вопросы. // (=добро пожаловать)',
		eng:
			"Feel free to ask any questions you may have. // (=you're welcome)",
	},
	{
		rus: 'Мы организуем визит в наш новый офис. // (=организовать)',
		eng:
			"We're going to arrange a visit to our new office. // (=organize)",
	},
	{
		rus:
			'Звучит очень интересно. Я бы хотел обсудить это с тобой. // (=Я рад принять ваше приглашение)',
		eng:
			"That sounds really interesting. I'd like to take you up on that. // (=I'm happy to accept your invitation)",
	},
	{
		rus: 'Это не совсем то, что я ищу. // (=Мне это не интересно)',
		eng:
			"That's not really what I'm looking for. // (=I'm not interested)",
	},
	{
		rus:
			'Это как раз то, что мне нужно. // (=Мне очень нравится ваше предложение)',
		eng:
			"It's just the kind of thing I need. // (=I really like you suggestion)",
	},
	{
		rus:
			'Имеет смысл приехать за 5 минут до начала презентации. // (=это разумно)',
		eng:
			"It makes sense to arrive 5 minutes before the presentation starts. // (=it's reasonable)",
	},

	{
		rus:
			'Звучит очень интересно. Я бы хотел обсудить это с тобой. // (=Я рад принять ваше приглашение)',
		eng:
			"That sounds really interesting. I'd like to take you up on that. // (=I'm happy to accept your invitation)",
	},

	{
		rus:
			'Я решил попробовать выучить иностранный язык. Да ну? Какой язык вы собираетесь изучать?',
		eng:
			"I've decided to try and learn a foreign language. Have you? Which language are you going to learn?",
	},
	{
		rus:
			'Ты собираешься пройти курс? Да. Он начнется на следующей неделе. Это здорово. Я уверен, вам понравится.',
		eng:
			"Are you going to do a cource? Yes. It starts next week. That's great. I am sure you will enjoy it.",
	},
	{
		rus: 'Надеюсь, что так. Но я думаю, что это будет сложно.',
		eng: 'I hope so. But I think it will be difficult.',
	},
	{
		rus:
			'Я слышал, ты скоро уезжаешь в отпуск. Вот именно. Мы собираемся поехать в Финляндию.',
		eng:
			"I hear you are going on holiday soon. That's right. We are going to go to Finland.",
	},
	{
		rus: 'Надеюсь, вы хорошо проведете время.',
		eng: 'I hope you will have a nice time.',
	},
	{
		rus:
			'Благодарю. Я пришлю тебе открытку и свяжусь с тобой, когда вернусь.',
		eng:
			"Thanks. I'll send you a postcard and I'll get in touch with you when I get back.",
	},
	{
		rus: 'У меня вечеринка в следующую субботу. Ты можешь прийти?',
		eng: 'I am having a party next Saturday. Can you come?',
	},
	{
		rus:
			'В Субботу? Я не уверен. На следующей неделе ко мне приедут друзья. Но я думаю, что они уедут в субботу. Но если они будут все еще здесь я не смогу прийти на вечеринку.',
		eng:
			"On Saturday? I'm not sure. Some friends of mine are coming to stay with me next week. But I think they will leave by Saturday. But if they are still here I won't be able to come to party.",
	},
	{
		rus:
			'Ладно. Скажи мне, как только узнаешь. Я позвоню тебе в течение недели.',
		eng:
			"OK. Tell me as soon as you know. I'll call you during the week.",
	},
	{
		rus:
			'Мой новый партнер по команде такой общительный: дружелюбный, энергичный, ей легко и приятно быть с другими.',
		eng:
			"My new teammate is so outgoing: she's friendly, energetic and finds it easy and enjoyable to be with the others.",
	},
	{
		rus:
			'Я считаю, что я гибкий человек, что означает, что я могу легко измениться в соответствии с любой новой ситуацией.',
		eng:
			"I believe I'm a flexible person, which means I can change easily to suit any new situation.",
	},
	{
		rus:
			'Мой руководитель очень условен, что означает, что у него есть поведение и отношение, которые большинство людей считают нормальными.',
		eng:
			'My team lead is very conventional, which means he has the behaviour and attitudes that most people consider to be normal.',
	},
	{
		rus:
			'Мой друг настроен решительно: он тверд в своих решениях и никому не позволит помешать ему делать то, что он хочет.',
		eng:
			"My friend is determined: he's firm in his decisions and won't let anyone prevent him from doing what he wants to do.",
	},
	{
		rus:
			'Мне просто нравится работать с вдумчивыми коллегами: они добры и заботятся о чувствах и потребностях других людей.',
		eng:
			"I just love working with thoughtful colleagues: they're kind and care about other people's feelings and needs.",
	},
	{
		rus:
			'Я хотел бы быть самодостаточным, когда мне не придется зависеть от других.',
		eng:
			"I'd love to be self-contained when I wouldn't have to depend on others for support.",
	},
	{
		rus:
			'Джейн очень тактична: она старается не говорить и не делать ничего, что может раздражать или расстраивать других людей.',
		eng:
			"Jane is really tactful: she's careful not to say or do anything that will annoy or upset other people.",
	},
	{
		rus:
			'Я методичный человек, который делает все тщательно и логично.',
		eng:
			"I'm a methodical person, who does things in a careful and logical way.",
	},
	{
		rus:
			'Мой руководитель команды очень отстранен: на него не влияют другие люди или его собственные чувства.',
		eng:
			"My team lead is really detached: he isn't influenced by other people or by his own feelings.",
	},
	{
		rus:
			'Трудно работать с очень импульсивными людьми, поскольку они действуют внезапно, не задумываясь о том, что может произойти из-за их действий.',
		eng:
			"It's hard to work with very impulsive people as they act suddenly without thinking carefully about what might happen because of their actions.",
	},
	{
		rus:
			'Мне не нравится работать с нерешительными людьми: им трудно принимать решения, и это все тормозит.',
		eng:
			"I don't like working with indecisive people: they find it difficult to make decisions and it slows everything.",
	},
	{
		rus:
			'Мне нужно оставаться сосредоточенным, что означает, что я должен иметь четкие цели и уделять внимание их достижению.',
		eng:
			'I need to stay focused, which means I need to have clear aims and give my attention to achieving them.',
	},
	{
		rus:
			'Мой руководитель очень прагматичен и всегда решает проблемы практично и разумно.',
		eng:
			'My team lead is very pragmatic and always solves problems in a practical and sensible way.',
	},
	{
		rus:
			'Нам нужно принять рациональное решение. //(на основе разума, а не эмоций)',
		eng:
			'We need to make a rational decision. //(based on reason rather than emotions)',
	},
	{
		rus:
			'Обычно я взвешиваю всю информацию перед принятием решения. //(рассмотрим хорошие и плохие аспекты)',
		eng:
			'I usually weigh up all the information before making a decision. //(consider good and bad aspects)',
	},
	{
		rus:
			'Вы должны быть уверены в своих собственных суждениях. (предлог)',
		eng: 'You need to have confidence in your own judgment. //',
	},
	{
		rus: 'Я не могу выбрать между двумя вариантами. //(выбирать)',
		eng: "I can't decide between the two options. //(choose)",
	},
	{
		rus:
			'Нужно продумать все возможные решения, а потом сделать выбор. //(подумайте о них внимательно)',
		eng:
			'We need to consider all the possible solutions and then make a choice. //(think about them carefully)',
	},
	{
		rus:
			'Давайте отложим решение, пока не поговорим с клиентом. //(откладывать)',
		eng:
			"Let's delay the decision until we've talked to the customer. //(postpone)",
	},
	{
		rus:
			'Я собираюсь поговорить со своим тимлидом, чтобы получить другую точку зрения на этот вопрос. //(вид)',
		eng:
			"I'm going to talk to my team lead to get a different perspective on the issue. //(view)",
	},
	{
		rus:
			'Когда мне трудно принять решение, я обычно полагаюсь на интуицию. //(доверие)',
		eng:
			'When I find it difficult to make a decision, I usually rely on my intuition. //(trust)',
	},
	{
		rus:
			'Я собираюсь поговорить со своей командой, чтобы получить другую точку зрения на этот вопрос.',
		eng:
			"I'm going to talk to my team lead to get a different perspective on the issue.",
	},
	{
		rus:
			'Вы должны быть уверены в своих собственных суждениях. //(обязательно)',
		eng:
			'You need to have confidence in your own judgment. //(be sure about)',
	},
	{
		rus:
			'Пока еще слишком рано судить об этом предложении. //(мнение после тщательного размышления)',
		eng:
			'It is still too soon to form a judgement about this suggestion. //(opinion after thinking carefully)',
	},
	{ rus: 'Хорошие новости!', eng: 'The news is good!' },
	{
		rus: '( few = not enough ) ( a few = several )',
		eng: '( few = not enough ) ( a few = several )',
	},
	{
		rus: '( little = not enough ) ( a little = some / enough )',
		eng: '( little = not enough ) ( a little = some / enough )',
	},
];
const dictionary2: dictType[] = [
	{
		rus:
			'Джозеф всегда был одним из самых эффективных членов команды.',
		eng:
			'Jozef was always one of the most effective members of the team.',
	},
	{
		rus:
			'Кроме того, он добросовестен и проявляет большой потенциал.',
		eng: 'Furthermore he is conscientious and shows great potential.',
	},
	{
		rus:
			'Несмотря на то, что у него мало опыта в туристической отрасли, он быстро достиг превосходного уровня знаний.',
		eng:
			'Despite having little experience in the travel industry, he has quickly attained an excellent level of expertise.',
	},
	{
		rus:
			'Однако в последнее время появились опасения по поводу его работы.',
		eng:
			'However recently there have been concerns about his performance at work.',
	},
	{
		rus:
			'В то время как в прошлом он был пунктуальным и надежным, он начал приходить поздно.',
		eng:
			'Whereas in the past he has been punctual and reliable, he has started to arrive late.',
	},
	{
		rus: 'Кроме того, он брал слишком много выходных.',
		eng: 'In addition he has had a lot of time off.',
	},
	{
		rus:
			'В связи с этим его коллегам пришлось взять на себя часть работы.',
		eng:
			'Owing to this, his colleagues have had to take on some of his workflow.',
	},
	{
		rus:
			'Кроме того, некоторые члены его команды сообщили, что в последнее время он начал проявлять признаки стресса.',
		eng:
			'Furthermore some of his team have reported that he has started to show signs of stress recently.',
	},
	{
		rus:
			'Поэтому я запросил встречу с Джозефом для обсуждения этих вопросов.',
		eng:
			'Consequently I requested a meeting with Jozef to discuss these matters.',
	},
	{
		rus:
			'Хотя сначала он не хотел обсуждать эту проблему, в конце концов нам удалось прояснить этот вопрос.',
		eng:
			'Although he was reluctant to discuss the problem at first, we were eventually able to clarify the matter.',
	},
	{
		rus:
			'Помимо работы над рядом сложных проектов, Джозеф также ухаживал за больным родственником и был в процессе переезда.',
		eng:
			'As well as working on a number of difficult projects, Jozef has also been looking after ill relative and in the process of moving house.',
	},
	{
		rus:
			'Я рекомендовал, чтобы мы сейчас организовали профессиональную поддержку и управление стрессом, чтобы помочь ему.',
		eng:
			'I recommended that we now arrange professional support and stress management to help him.',
	},
	{
		rus: 'Какова ваша позиция по этому вопросу? //(мнение)',
		eng: "What's your position on this? //(view)",
	},
	{
		rus:
			'Насколько я понимаю, мы вряд ли продвинемся в этом направлении. //(на мой взгляд)',
		eng:
			"As far as I'm concerned, we'd hardly make any progress this way. //(in my opinion)",
	},

	{
		rus:
			'Я думаю, было бы безумием принять этот срок. /(Это плохая идея.)',
		eng:
			"I think it would be crazy to accept this deadline. //(It's a bad idea.)",
	},
	{
		rus:
			'Посмотрите на цифры сверхурочных. Они здесь в письменной форме. //(в письменном виде, в печатном виде)',
		eng:
			"Look at the overtime figures. They're here in black and white. //(in written form, and therefore definite)",
	},
	{
		rus:
			'Давайте подготовим список действий из того, что мы уже обсуждали. //(подготовка списка)',
		eng:
			"Let's draw up some action points on what we've discussed so far. //(prepare a list)",
	},
	{
		rus:
			'Майк, не мог бы ты начать, пожалуйста? //(начало обсуждения)',
		eng:
			'Mike, could you start us off, please? //(begin the discussion)',
	},
	{
		rus:
			'Давайте углубимся в проблему и обсудим ее еще раз на следующей встрече. //(исследовать)',
		eng:
			"Let's look into the problem and discuss it again at our next meeting. //(investigate)",
	},
	{
		rus: 'Перейдем к следующему пункту повестки дня.',
		eng: "Let's turn to the next item on the agenda.",
	},
	{
		rus:
			'Подожди, давай послушаем, что Крис хочет сказать. (дело прерывая)',
		eng:
			"Hang on, let's hear what Chris has to say. (dealing with interrupting)",
	},
	{
		rus:
			'Недостатком этого решения является то, что нам придется делать много лишней работы. //(неудобство)',
		eng:
			"The drawback of this solution is that we'll have to do a lot of extra work. //(disadvantage)",
	},
	{
		rus:
			'То есть ты хочешь сказать, что мы пропустим крайний срок? //(то, что вы пытаетесь сказать,)',
		eng:
			"So what you're getting at is we're going to miss the deadline? //(what you're trying to say is)",
	},
	{
		rus: 'Мы можем перейти к другому вопросу? //(начать говорить о)',
		eng: 'Can we move on to another issue? //(start talking about)',
	},
	{
		rus:
			'Хорошо, похоже, мы кое-куда продвинулись. //(Я думаю, мы делаем успехи)',
		eng:
			"Good, we seem to be getting somewhere. //(I think we're making progress)",
	},
	{
		rus: 'Какова ваша позиция по этому вопросу? (предлог)',
		eng: "What's your position on this? //",
	},
	{
		rus: 'Перейдем к следующему пункту повестки дня. (предлог)',
		eng: "Let's turn to the next item on the agenda. //",
	},
	{
		rus:
			'Если мы внимательно посмотрим на факты, то увидим, что наши расходы слишком высоки. //(см. подробно )',
		eng:
			"If we look closely at the facts, we'll see that our costs are too high. //(see in detail)",
	},
	{
		rus:
			'Дело в том, что нам нужно выяснить, почему у нас так много сверхурочных.//(в чем проблема)',
		eng:
			'The thing is that we need to find out why we have so much overtime.//(what the problem is)',
	},
	{
		rus:
			'Они попросили его уйти, - другими словами, он был уволен. //(те средства)',
		eng:
			'They asked him to leave - in other words he was fired. //(that means)',
	},
	{
		rus:
			'Сегодня я хотел бы установить, где мы можем улучшить рабочий процесс проекта. //(выяснить)',
		eng:
			"Today I'd like to establish where we can improve the project workflow. //(find out)",
	},
	{
		rus:
			'Я не хочу тратить на это слишком много времени. //(много времени для обсуждения)',
		eng:
			"I don't want to spend too long on this point. //(much time to discuss)",
	},
	{
		rus:
			'Я имею в виду, нам нужно больше информации об атмосфере в офисе.',
		eng:
			'What I mean is we need more information about the atmosphere in the office.',
	},
	{
		rus: 'Ситуация серьезная. Нужно что-то сделать, пока не поздно.',
		eng:
			"The situation is serious. Something must be done before it's too late.",
	},
	{
		rus:
			'Я уже должен был получить письмо. Возможно, его отправили не по тому адресу.',
		eng:
			'I should have received the letter by now. It might have been sent to the wrong address.',
	},
	{
		rus: 'Решение не будет принято до следующего заседания.',
		eng: 'A decision will not be made until the next meeting.',
	},
	{
		rus:
			'Считаете ли вы, что больше денег нужно было потратить на образование?',
		eng: 'Do you think that more money should be spent on education?',
	},
];
const oldDictionary2: dictType[] = [
	{
		rus:
			'Дорога находится в очень плохом состоянии. Она должна была быть отремонтирована давным-давно.',
		eng:
			'The road is in very bad condition. It should have been repaired a long time ago.',
	},
	{
		rus: 'Раненый не мог ходить и его должны были нести.',
		eng: "The injured man couldn't walk and had to be carried.",
	},
	{
		rus:
			'Я сказал администратору отеля, что хотел бы, чтобы меня разбудили в 6.30 на следующее утро.',
		eng:
			'I told the hotel receptionist I wanted to be waken up at 6:30 the next morning.',
	},
	{
		rus: 'Если бы вы не толкнули полицейского, вас бы не арестовали.',
		eng:
			"If you hadn't pushed the policeman, you wouldn't have been arrested.",
	},
	{
		rus:
			'Неизвестно, как начался пожар, но он мог быть вызван неисправностью электричества.',
		eng:
			"It's not certain how the fire started, but it might have been caused by an electrical fault.",
	},
	{
		rus: 'Кто-то убрался в комнате. Номер был очищен.',
		eng: 'Somebody has cleaned the room. The room has been cleaned.',
	},
	{
		rus:
			'Кто-то сейчас пользуется компьютером. Компьютер используется прямо сейчас.',
		eng:
			'Somebody is using the computer right now. The computer is being used right now.',
	},
	{
		rus:
			'Я не знал, что кто-то записывает наш разговор. Я не знал, что наш разговор записывается.',
		eng:
			"I didn't realize that somebody was recording our conversation. I didn't realize that out conversation was being recorded.",
	},
	{
		rus:
			'Когда мы прибыли на стадион, мы обнаружили, что они отменили игру. Когда мы добрались до стадиона, то обнаружили, что игру отменили.',
		eng:
			'When we got to the stadium, we found that they had canceled the game. When we got to the stadium, we found that the game had been canceled.',
	},
	{
		rus:
			'Вокруг города строят новую кольцевую дорогу. Вокруг города строится новая дорога.',
		eng:
			'They are building a new ring road round the city. The new road is being built round the city.',
	},
	{
		rus:
			'Они построили новую больницу рядом с аэропортом. Рядом с аэропортом построена новая больница.',
		eng:
			'They have built a new hospital near the airport. The new hospital has been built near the airport.',
	},
	{
		rus: 'За нами кто-то следит. Думаю, за нами следят.',
		eng: "There's somebody behind us. I think we're being followed.",
	},
	{
		rus: 'Эта комната выглядит по-другому. Вы покрасили стены?',
		eng: 'This room looks different. Have you painted the walls?',
	},
	{
		rus: 'Мой зонтик исчез. Кто-то забрал мой зонтик.',
		eng:
			'My umbrella has disappeared. Somebody has taken my umbrella.',
	},
	{
		rus:
			'Сэм теперь получает более высокую зарплату. Его повысили в должности.',
		eng: 'Sam gets a higher salary now. He has been promoted.',
	},
	{
		rus:
			'Энн не сможет использовать свой офис на этой неделе. Он ремонтируется.',
		eng:
			"Ann can't use her office this week. It is being redecorated.",
	},
	{
		rus:
			'Вчера была проблема с ксероксом, но теперь все в порядке. Он снова работает. Он был отремонтирован.',
		eng:
			"There was a problem with the photocopier yesterday, but now it's OK. It is working again. It has been repaired.",
	},
	{
		rus:
			'Когда я вошел в комнату, то увидел, что стол и стулья находятся в разных местах. Мебель была перемещена.',
		eng:
			'When I went into the room, I saw that the table and chairs were not in the same place. The furniture had been moved.',
	},
	{
		rus:
			'Мой сосед исчез полгода назад.  С тех пор его никто не видел.',
		eng:
			'A neighbor of mine disappeared six month ago. He has not been seen since then.',
	},
	{
		rus: 'Интересно, как Джейн сейчас. Я не видел ее целую вечность.',
		eng:
			"I wonder how Jane is these days. I haven't seen her for ages.",
	},
	{
		rus:
			'Моего друга ограбили по дороге домой несколько дней назад. Тебя когда-нибудь грабили?',
		eng:
			'A friend of mine was mugged on his way home a few nights ago. Have you ever been mugged?',
	},
	{
		rus: 'Мой дед был строителем. Он построил этот дом в 1961 году.',
		eng:
			'My grandfather was a builder. He built this house in 1961. // When we use an active verb, we say what the subject does:',
	},
	{
		rus: 'Это большая компания. Здесь работают двести человек.',
		eng:
			"It's a big company. It employs two hundred people. // When we use an active verb, we say what the subject does:",
	},
	{
		rus: 'Сколько лет этому дому? Он был построен в 1961 году.',
		eng:
			'How old is this house? It was built in 1961. // When we use a passive verb, we say what happens to the subject:',
	},
	{
		rus:
			'При ограблении было украдено много денег. (кто-то украл его, но мы не знаем, кто)',
		eng:
			"A lot of money was stolen in the robbery. (somebody stole it, but we don't know who)",
	},
	{
		rus:
			'Эта комната убирается каждый день? (кто-нибудь его чистит? - это не важно, кто)',
		eng:
			"Is this room cleaned every day? (does somebody clean it? - it's not important who)",
	},
	{
		rus: 'Этот дом был построен моим дедом.',
		eng:
			'This house was built by my grandfather. // If we want to say who does or what causes the action, we use by:',
	},
	{
		rus: 'В компании работает двести человек.',
		eng:
			'Two hundred people are employed by the company. // If we want to say who does or what causes the action, we use by:',
	},
	{
		rus: 'Многие аварии происходят из-за неосторожного вождения.',
		eng: 'Many accidents are caused by careless driving.',
	},
	{
		rus: 'Меня не приглашают на вечеринки очень часто.',
		eng: "I'm not invited to parties very often.",
	},
	{
		rus: 'Как произносится это слово?',
		eng: 'How is this word pronounced?',
	},
	{
		rus: 'Ночью нас разбудил громкий шум.',
		eng: 'We were woken up by a loud noise during the night.',
	},
	{
		rus: 'Ты ходила на вечеринку? Нет, меня не приглашали.',
		eng: "Did you go to the party? No, I wasn't invited.",
	},
	{
		rus: 'Сколько денег было украдено во время ограбления?',
		eng: 'How much money was stolen in the robbery?',
	},
	{
		rus: 'Кто-нибудь уберет эту комнату позже.',
		eng: 'Somebody will clean this room later.',
	},
	{
		rus: 'Эта комната будет убрана позже.',
		eng: 'This room will be cleaned later.',
	},
	{
		rus: 'Ситуация серьезная. Нужно что-то сделать, пока не поздно.',
		eng:
			"The situation is serious. Something must be done before it's too late.",
	},
	{
		rus: 'Тайна - это то, что невозможно объяснить.',
		eng: "A mystery is something that can't be explained.",
	},
	{
		rus: 'Музыка была очень громкой и слышалась издалека.',
		eng:
			'The music was very loud and could be heard from a long way away.',
	},
	{
		rus: 'В следующем году будет построен новый супермаркет.',
		eng: 'A new supermarket is going to be built next year.',
	},
	{
		rus: 'Пожалуйста, уходи. Я хочу, чтобы меня оставили в покое.',
		eng: 'Please go away. I want to be left alone.',
	},
	{
		rus: 'Кто-то должен был убраться в комнате.',
		eng: 'Somebody should have cleaned the room.',
	},
	{
		rus: 'Номер должен был быть убран.',
		eng: 'The room should have been cleaned.',
	},
	{
		rus: 'Сначала были какие-то проблемы, но, похоже, они решены.',
		eng:
			'There were some problems at first, but they seem to have been solved.',
	},
	{
		rus: 'Комната выглядит хорошо. Кто-то убрал её.',
		eng: 'The room looks nice. Somebody has cleaned it.',
	},
	{
		rus: 'Комната выглядит хорошо. Она была убрана.',
		eng: 'The room looks nice. It has been cleaned.',
	},
	{
		rus: 'Вы слышали? Поездка была отменена.',
		eng: 'Have you heard? The trip has been cancelled.',
	},
	{
		rus: 'Тебя когда-нибудь кусала собака?',
		eng: 'Have you ever been bitten by a dog?',
	},
	{
		rus: 'Ты идешь на вечеринку? Нет, меня не приглашали.',
		eng: "Are you going to the party? No, I haven't been invited.",
	},
	{
		rus: 'Номер выглядел хорошо. Кто-то вычистил его.',
		eng: 'The room looked nice. Somebody had cleaned it.',
	},
	{
		rus: 'Номер выглядел хорошо. Он был убрана.',
		eng: 'The room looked nice. It had been cleaned.',
	},
	{
		rus: 'Овощи не очень вкусные. Их слишком долго готовили.',
		eng:
			"The vegetables didn't taste good. They had been cooked too long.",
	},
	{
		rus: 'Машине было три года, но она почти не использовалась.',
		eng:
			"The car was three years old, but hadn't been used very much.",
	},
	{
		rus: 'Кто-то убирает комнату в данный момент.',
		eng: 'Somebody is cleaning the room at the moment.',
	},
	{
		rus: 'В данный момент в комнате проводится уборка.',
		eng: 'The room is being cleaned at the moment.',
	},
	{
		rus: 'Чем я могу вам помочь? Нет, спасибо, меня уже обслуживают.',
		eng: "Can I help you? No, thanks, I'm being served.",
	},
	{
		rus:
			'Наука о данных на самом деле не моя область знаний. //(навыки и знания, которые вы приобретаете на основе опыта или подготовки)',
		eng:
			'Data science is not really my area of expertise. //(skills and knowledge that you learn by experience or training)',
	},
	{
		rus:
			'Городская инфраструктура должна быть развита таким образом, чтобы она отвечала потребностям современных компаний. //(основные системы и услуги, такие как транспорт, энергоснабжение)',
		eng:
			'The city infrastructure should be developed so that it can meet the needs of the modern companies. //(basic systems and services such as transport, power supplies)',
	},
	{
		rus:
			'Аутсорсинг бизнес-процессов (BPO), когда ответственность за запуск конкретной системы или услуги возлагается на людей вне компании, становится все более популярным.',
		eng:
			'Business process outsourcing (BPO) when the responsibility for running a particular system or service are given to people outside the company is getting more popular.',
	},
	{
		rus:
			'Оффшорное расположение базируется в иностранном государстве.',
		eng: 'Offshore location is based in a foreign country.',
	},
	{
		rus:
			'Аутсорсинг может помочь компаниям снизить накладные расходы. //(get, reach)',
		eng:
			'Outsourcing can help companies achieve lower overheads. //(get, reach)',
	},
	{
		rus:
			'Мы предпринимаем шаги по оптимизации работы и повышению производительности. //(сделать нашу работу более эффективной)',
		eng:
			"We're taking steps to streamline operations and increase productivity. //(make our work more efficient)",
	},
	{
		rus:
			'Аутсорсинг может привести к потере рабочих мест в европейских странах. //(привести)',
		eng:
			'Outsourcing can lead to job losses in European countries. //(result in)',
	},
	{
		rus:
			'У нас есть бюджетные ограничения по проекту, поэтому нужно принимать меры по сокращению расходов и сокращать расходы.',
		eng:
			'We have budget constraints on the project, so we need to take cost-cutting measures and reduce spending.',
	},
	{
		rus:
			'Аутсорсинг ИТ-услуг может помочь компании высвободить ресурсы для своей основной деятельности. (предоставлять)',
		eng:
			'Outsourcing IT services can help a company free up resources for its core activities. (make available)',
	},
	{
		rus:
			'Новая технология может помочь нам получить конкурентное преимущество над нашими конкурентами. //(преимущество)',
		eng:
			'The new technology can help us gain a competitive edge over our competitors. //(advantage)',
	},
	{
		rus:
			'Наша новая дочерняя компания создала много рабочих мест и улучшила качество жизни местного населения. //(сделать лучше)',
		eng:
			'Our new subsidiary has created a lot of jobs and improved the quality of life for local people. //(made better)',
	},
	{
		rus:
			'Мы наняли новых специалистов, так что теперь мы можем справиться с большим объемом работы. //(дело с; предлог)',
		eng:
			"We've hired some new specialists, so now we're able to get through a bigger volume of work. //(deal with; preposition)",
	},
	{
		rus:
			'Правительство должно разработать стратегии борьбы с безработицей. //(создавать)',
		eng:
			'The government has to develop strategies to cope with unemployment. //(create)',
	},
	{
		rus:
			'Для руководства этой командой в проекте требуется высокая степень технической экспертизы. //(навыки и знания, приобретенные на основе опыта и профессиональной подготовки)',
		eng:
			'A high degree of technical expertise is required to lead this team on the project. //(skills and knowledge learnt by experience and training)',
	},
	{
		rus:
			'Компании ЕС передают задачи бизнес-процессов на аутсорсинг развивающимся экономикам, таким как Индия, из-за снижения затрат на рабочую силу. //(развивающийся)',
		eng:
			'EU companies are outsourcing business process tasks to emerging economies like India due to lower labour costs. //(developing)',
	},
	{
		rus:
			'Компания имеет несколько средств тренировки как Лаборатория Java и Лаборатория испытания. (оборудованные места для обучения)',
		eng:
			'The company has a number of training facilities like Java Lab and Testing Lab. (equipped places for learning)',
	},
	{
		rus:
			'Даже основная деятельность компании сегодня может быть передана на аутсорсинг в оффшоры. //(главный)',
		eng:
			'Even core activities of the company can be outsourced to offshore locations nowadays. //(main)',
	},
	{
		rus:
			'Мы переехали в огромный офис, так что наши накладные расходы намного выше. //(расходы на электроэнергию, отопление и т. д.)',
		eng:
			"We've moved to a huge office so our overheads are much higher. //(spending on electricity, heating, etc.)",
	},
	{
		rus:
			'В IT-сфере много аутсорсинговых вендоров. //(компании, продающие услуги аутсорсинга)',
		eng:
			'There are a lot of outsourcing vendors in IT area. //(companies that sell outsourcing services)',
	},
	{
		rus:
			'Экономия является одним из главных причин, почему европейские и американские компании передают на аутсорсинг в Индию. //(тратя меньше денег)',
		eng:
			'Cost-saving is one of the main reasons why European and American companies outsource to India. //(spending less money)',
	},
	{
		rus:
			'Общая выручка компании в прошлом году оценивается в 1,5 миллиарда долларов. //(регулярный доход компании)',
		eng:
			'The total revenue of the company last year was estimated at $1.5 billion. //(the company regular income)',
	},
	{
		rus:
			'Мы поедем на автобусе или на поезде? Если мы поедем на автобусе, это будет дешевле.',
		eng:
			'Shall we go by bus or by train? If we go by bus, it will be cheaper.',
	},
	{
		rus:
			'Как вы собираетесь путешествовать?  Мы едем поездом. Если бы мы ехали на автобусе, это было бы дешевле, но поезд быстрее.',
		eng:
			"How are you going to travel?  We're going by train. If we went by bus, it would be cheaper, but the train is quicker.",
	},
	{
		rus: 'Что бы вы сделали, если бы выиграли много денег?',
		eng: 'What would you do if you won a lot of money?',
	},
	{
		rus: 'Если завтра были выборы, за кого бы вы проголосовали?',
		eng: 'If there was an election tomorrow, who would you vote for?',
	},
	{
		rus:
			'Кажется, я оставила свои часы у тебя дома. Если найдешь, можешь мне позвонить?',
		eng:
			'I think I left my watch at your house. If you find it, can you call me?',
	},
	{
		rus:
			'Если бы вы нашли бумажник на улице, что бы вы с ним сделали?',
		eng:
			'If you found a wallet in the street, what would you do with it?',
	},
	{
		rus:
			'Мы обычно не используем would в if-части предложения: я бы очень испугался, если бы кто-то направил на меня пистолет.',
		eng:
			"We do not normally use would in the if-part of the sentence: I'd be very scared if somebody pointed a gun at me.",
	},
	{
		rus:
			"Буду признателен, если вы сообщите мне о своем решении как можно скорее. / Но вы можете использовать 'if ... would' когда вы попросите кого-либо сделать что-то: (из официального письма)",
		eng:
			'I would be grateful if you would let me know your decision as soon as possible. // But you can use if ... would when you ask somebody to do something: (from a formal letter)',
	},
	{
		rus: 'Что бы вы сделали, если бы вас укусила змея?',
		eng: 'What would you do if you were bitten by a snake?',
	},
	{
		rus:
			'Я еще не собираюсь ложиться спать. Я не устала. Если бы я сейчас легла спать, я бы не спала.',
		eng:
			"I'm not going to bed yet. I'm not tired. If I went to bed now, I wouldn't sleep.",
	},
	{
		rus: 'Вы не возражаете, если я воспользуюсь вашим телефоном?',
		eng: 'Would you mind if I used your phone?',
	},
	{
		rus:
			'Если бы я выиграл много денег, я мог бы купить дом. //(= возможно, что я бы купил дом)',
		eng:
			'If I won a lot of money, I might buy a house. //(= it is possible that I would buy a house)',
	},
	{
		rus:
			'Если бы дождь прекратился, мы могли бы выйти. //(= мы могли бы выйти)',
		eng:
			'If it stopped raining, we could go out. //(= we would be able to go out)',
	},
	{
		rus: 'Если бы я выиграл в лотерею, я бы купил большой дом.',
		eng: "If I won the lottery, I'd buy a big house.",
	},
	{
		rus:
			'Вы не собираетесь продавать свою машину, потому что она старая и не стоит много.  Если бы я продал свою машину, я бы не получил за нее много денег.',
		eng:
			"You're not going to sell your car because it's old and not worth much.  If I sold my car, I wouldn't get much money for it.",
	},
	{
		rus:
			'Ты часто встречаешься с Сарой. Твой друг хочет с ней связаться. Если я увижу Сару, я скажу ей позвонить тебе.',
		eng:
			"You often see Sarah. A friend of yours wants to contact her. If I see Sarah, I'll tell her to call you.",
	},
	{
		rus:
			'Вы не ожидаете, что в здании будет пожар. - Что бы вы сделали, если бы в здании произошел пожар?',
		eng:
			"You don't expect that there will be a fire in the building. - What would you do if there was a fire in the building?",
	},
	{
		rus:
			'Вы никогда не теряли паспорт. Вы можете только представить. - Я не знаю, что я буду делать, если потеряю паспорт.',
		eng:
			"You've never lost your passport. You can only imagine it. - I don't know what I would do if I lost my passport.",
	},
	{
		rus:
			'Кто-то останавливает вас и спрашивает дорогу в банк. - Если вы пойдете направо в конце этой улицы, вы увидите банк слева от вас.',
		eng:
			"Somebody stops you and asks the way to a bank. - If you go right at the end of this street, you'll see a bank on your left.",
	},
	{
		rus:
			'Вы находитесь в лифте. Есть аварийная кнопка. Никто не будет на него давить. Что произойдет, если кто-то нажмет эту кнопку?',
		eng:
			"You're in a lift. There is an emergency button. Nobody is going to press it. What would happen if somebody pressed that button?",
	},
	{
		rus: 'Я организую страховку на случай, если заболею.',
		eng: "I'm organizing some insurance in case I get ill.",
	},
	{
		rus:
			'Я очень занята, поэтому, пожалуйста, не беспокойте меня, если это не чрезвычайная ситуация.',
		eng:
			"I'm very busy so please don't disturb me unless it's an emergency.",
	},
	{
		rus:
			'При условии, что продажи не начнут падать, мы достигнем наших целей в этом году.',
		eng:
			"Provided that sales don't start falling, we'll reach our targets this year.",
	},
	{
		rus:
			'Я должен быть в состоянии добраться туда к 10:30, но я дам вам знать, если возникнут проблемы.',
		eng:
			"I should be able to get there by 10:30, but I'll let you know if there's a problem.",
	},
	{
		rus:
			'Пока мы получаем финансирование, мы можем продолжить проект в октябре.',
		eng:
			'As long as we get the funding, we can go ahead with the project in October.',
	},
	{
		rus: 'если нам помогут, мы сможем закончить вовремя.',
		eng: 'if we got a bit more help, we could finish on time.',
	},
	{
		rus: 'Я помогу тебе, обеспечу мою смену в пятницу.',
		eng: "I'll help you providing you do my shift on Friday.",
	},
	{
		rus: 'Предположим, они предложат тебе работу, ты согласишься?',
		eng: 'Supposing they offered you a job, would you take it?',
	},
	{
		rus:
			'Я буду дома к 5:30, если только совещание закончилось поздно.',
		eng: "I'll be home by 5:30 unless the meeting finished late.",
	},
	{
		rus:
			"Мы используем 'на всякий случай', чтобы поговорить о действиях, предпринятых, чтобы чего-то избежать.: Я возьму запасную батарею на случай, если основная закончится.",
		eng:
			"We use 'in case' to talk about action taken to avoid something.: I'll take a spare battery in case the main runs out.",
	},
	{
		rus: 'Если меня не повысят, я уйду из компании.',
		eng: "If I'm not promoted, I'll leave the company.",
	},
	{
		rus:
			'если вы приказываете 20 блоков, то мы передадим Вам скидка 15%.',
		eng: 'if you order 20 units, we will give you a 15% discount.',
	},
	{
		rus: 'Если поторопимся, успеем вовремя.',
		eng: 'If we hurry, we can get there in time.',
	},
	{
		rus:
			'Сегодня нам нужно решить, какое решение мы собираемся предложить клиенту. //(=выберите после тщательного обдумывания)',
		eng:
			"What we need to decide on today is what solution we're going to offer the customer. //(=choose after thinking carefully)",
	},
	{
		rus:
			'Давайте посмотрим, какие у нас есть варианты. //(=усмотрение)',
		eng: "Let's look at what our options are. //(=choices)",
	},
	{
		rus: 'Похоже на план. //(=Я думаю, это хорошая идея)',
		eng: "That sounds like a plan. //(=I think it's a good idea)",
	},
	{
		rus: 'Нам нужно обсудить кадровый состав и бюджет. //(=тематика)',
		eng:
			'The areas we need to discuss are staffing and budget. //(=subjects)',
	},
	{
		rus:
			'Давайте просто подведем итоги. //(=предоставить основную информацию)',
		eng:
			"Let's just summarize the situation. //(=give the main information)",
	},
	{
		rus: 'Так что мы решили? //(=до настоящего времени)',
		eng: 'So what have we decided so far? //(=up to now)',
	},
	{
		rus:
			'Позвольте мне только резюмировать то, что обсуждалось сегодня. //(=повторить основные моменты)',
		eng:
			'Let me just recap what has been discussed today. //(=repeat the main points)',
	},
	{
		rus: 'Я могу жить с этим.//(=это нормально для меня; предлог)',
		eng: "I can live with that.//(=it's ok for me; preposition)",
	},
	{
		rus:
			'Я предлагаю получить отзывы клиентов о нашей новой системе. //(=предлагать)',
		eng:
			'What I propose is we get customer feedback on our new system. //(=suggest)',
	},
	{
		rus:
			'Давайте оставим наши варианты открытыми, пока мы не получим больше информации. //(=дождаться принятия решения)',
		eng:
			"Let's keep our options open until we've received more information. //(=wait before making a decision)",
	},
	{
		rus:
			'Предположим, мы немного растянем бюджет, почему бы нам не добавить еще одного человека в команду? //(=только представить себе)',
		eng:
			"Supposing we stretch the budget a little, why don't we add one more person to the team? //(=just imagine)",
	},
	{
		rus:
			'Если мы просим нашу команду работать сверхурочно на этой неделе, как вы думаете, мы сможем уложиться в срок? //(=при условии, что)',
		eng:
			"Provided we ask our team to work overtime this week, do you think we'll be able to meet the deadline? //(=on condition that)",
	},
	{
		rus:
			'Мы не завершим проект вовремя, если не будем работать более эффективно. //(=если мы не)',
		eng:
			"We won't complete the project on time unless we work more efficiently. //(=if we don't)",
	},
	{
		rus:
			'Почему бы нам не назначить новую встречу для обсуждения этого вопроса? //(=Я предлагаю)',
		eng:
			"Why don't we schedule a new meeting to discuss this issue? //(=I suggest)",
	},
	{
		rus: 'Это не сработало бы для меня. //(=Я не согласен)',
		eng: "That wouldn't work for me. //(=I don't agree)",
	},
	{
		rus: 'Это решит проблему.//(=он может исправить)',
		eng: 'That will solve the problem.//(=it can fix)',
	},
	{
		rus:
			'Один из вариантов заключался бы в проведении обследования среди персонала.',
		eng: 'One option would be to conduct a survey among the staff.',
	},
	{
		rus:
			'Сара хочет позвонить Полу, но не может, потому что не знает его номера. Она говорит: если бы я знала его номер, я бы ему позвонила.',
		eng:
			"Sarah wants to phone Paul, but she can't do this because she doesn't know his number. She says: If I knew his number, I would phone him.",
	},
	{
		rus:
			'Сара говорит: если бы я знала его номер... . Это говорит о том, что она не знает его номер. Она воображает ситуацию. На самом деле она не знает его номера.',
		eng:
			"Sarah says: If I knew his number... . This tells us that she doesn't know his number. She is imagining the situation. The real situation is that she doesn't know his number.",
	},
	{
		rus:
			'Когда мы представляем себе такую ситуацию, мы используем if + past(если бы я знал / если бы Вы были / если бы мы этого не делали и т. д.). Но смысл в настоящем, а не в прошлом.',
		eng:
			"When we imagine a situation like this, we use if +past (if I knew / if you were / if we didn't etc.). But the meaning is present, not past",
	},
	{
		rus:
			'Есть много вещей, которые я хотел бы сделать если бы у меня было больше времени, (но у меня нет времени)',
		eng:
			"There are many things I'd like to do if I had more time, (but I don't have time)",
	},
	{
		rus:
			'Если бы я не хотела идти на вечеринку, я бы не пошла. (но я хочу пойти.)',
		eng:
			"If I didn't want to go to the party, I wouldn't go. (but I want to go)",
	},
	{
		rus:
			'У нас не было бы денег, если бы мы не работали, (но мы работаем)',
		eng:
			"We wouldn't have any money if we didn't work, (but we work)",
	},
	{
		rus: 'На моем месте, что бы ты сделал?',
		eng: 'If you were in my position, what would you do?',
	},
	{
		rus:
			'Жаль, что он не умеет водить. Было бы полезно, если бы мог.',
		eng:
			"It's a pity he can't drive. It would be useful if he could.",
	},
	{
		rus:
			'Мы используем прошлое таким же образом после желания (я хотел бы знать / я хотел бы, чтобы Вы были и т. д.). Мы говорим, что сожалеем о чем-то, что что-то не так, как нам хотелось бы.',
		eng:
			'We use the past in the same way after wish (I wish I knew / I wish you were etc.). We use wish to say that we regret something, that something is not as we would like it to be.',
	},
	{
		rus:
			'Хотел бы я знать номер телефона пола. // (= Я не знаю, и я сожалею об этом)',
		eng:
			"I wish I knew Paul's phone number. // (= I don't know it and I regret this)",
	},
	{
		rus: 'Ты когда-нибудь хотел летать? // (ты не можешь летать)',
		eng: "Do you ever wish you could fly? // (you can't fly)",
	},
	{
		rus:
			'Здесь много дождей. Хотел бы я, чтобы не было так много дождя.',
		eng: "It rains a lot here. I wish it didn't rain so much.",
	},
	{
		rus:
			'Здесь очень людно. Я хотел бы, чтобы не было так много людей, / / (есть много людей)',
		eng:
			"It's very crowded here. I wish there weren't so many people, // (there are a lot of people)",
	},
	{
		rus: 'Хотел бы я не работать завтра, но, к сожалению, работаю.',
		eng:
			"I wish I didn't have to work tomorrow, but unfortunately I do.",
	},
	{
		rus: 'На твоем месте я бы не покупал это пальто.',
		eng: "If I were you, I wouldn't buy that coat.",
	},
	{
		rus: 'Я бы пошел гулять, если бы не было так холодно.',
		eng: "I'd go for a walk if it weren't so cold.",
	},
	{
		rus: 'Хотел бы я, чтобы она была здесь.',
		eng: 'I wish she were here.',
	},
	{
		rus: 'Если бы я был богат, я бы много путешествовал.',
		eng: 'If I were rich, I would travel a lot.',
	},
	{
		rus: 'Кого бы вы спросили, если бы вам нужна была помощь?',
		eng: 'Who would you ask if you needed help?',
	},
	{
		rus: 'Жаль, что мне нечего читать.',
		eng: 'I wish I had something to read.',
	},
	{
		rus:
			'Она могла бы найти работу получше, если бы говорила по-английски.',
		eng: 'She could get a better job if she could speak English.',
	},
	{
		rus: 'Хотел бы я вам помочь.',
		eng: 'I wish I could help you.',
	},
	{
		rus:
			'Если вы заметили разрыв на рынке, вы можете использовать эту возможность для создания собственного бизнеса.//(=возможность для продукта / услуги, которая еще не существует)',
		eng:
			"If you've spotted a gap in the market, you can use this opportunity to set up your own business.//(=an opportunity for a product/service that doesn't exist yet)",
	},
	{
		rus:
			'Одной из самых больших проблем для нового бизнеса является привлечение достаточного начального капитала. //(=собирать)',
		eng:
			'One of the biggest challenges for a new business is to raise enough start-up capital. //(=collect)',
	},
	{
		rus:
			'Большинство инвесторов хотят быть уверенными, что они получат хорошую отдачу от инвестиций. //(=прибыль)',
		eng:
			"Most investors want to be confident that they'll get a good return on investment. //(=profit)",
	},
	{
		rus:
			'Если мы не сможем обеспечить большую финансовую поддержку, мы не сможем продолжать этот проект. //(=поддержка)',
		eng:
			"Unless we can secure more financial backing, we won't be able to go ahead with this project. //(=support)",
	},
	{
		rus:
			'Сеть контактов поможет вам найти новых клиентов для вашей компании.',
		eng:
			'A network of contacts can help you find new customers for your company.',
	},
	{
		rus:
			'Чтобы получить кредит в банке, нужно придумать солидный бизнес-план. //(=занимать деньги)',
		eng:
			'To get a loan from a bank, you need to come up with a solid business plan. //(=borrow money)',
	},
	{
		rus:
			'Оборот предприятия - это объем бизнеса в течение определенного периода времени.',
		eng:
			"A company's turnover is the amount of business done during a particular period of time.",
	},
	{
		rus:
			'Их прибыль в этом году была невероятно высокой. //(=очень высоко; трудно поверить)',
		eng:
			"Their profits this year have been incredibly high. //(=very high; it's hard to believe)",
	},
	{
		rus: 'Я считаю этот бизнес-план крайне рискованным. //(=очень)',
		eng: 'I think this business plan is extremely risky. //(=very)',
	},
	{
		rus:
			'Это предложение совершенно нелепо, я никогда на него не соглашусь! //(=неразумный)',
		eng:
			"This proposal is totally ridiculous, I'll never agree to it! //(=unreasonable)",
	},
	{
		rus:
			'К сожалению, новое устройство, которое я купил, абсолютно бесполезно. //(=неэффективный)',
		eng:
			'Unfortunately, the new device I bought is absolutely useless. //(=inefficient)',
	},
	{
		rus:
			'То, как он разговаривал со мной на встрече, было совершенно возмутительно. //(=странный, шокирующий, неразумный)',
		eng:
			'The way he talked to me at the meeting was totally outrageous. //(=strange, shocking, unreasonable)',
	},
	{
		rus:
			'Если вы придумали отличную бизнес-идею, не тратьте свое время, пойти на это! //(=пытаться)',
		eng:
			"If you've come up with a great business idea, don't waste your time, go for it! //(=try)",
	},
	{
		rus:
			'Его запуск планирует привлечь 5 млн от венчурных капиталистов. //(=люди/организации, которые вкладывают деньги в новые рискованные предприятия)',
		eng:
			'His start-up is looking to raise 5 million from venture capitalists. //(=people/organizations that invest money into new, risky businesses)',
	},
	{
		rus:
			'Мой друг - потенциальный предприниматель, он пытается создать свой собственный бизнес.',
		eng:
			"My friend is a would-be entrepreneur - he's trying to set up his own business.",
	},
	{
		rus:
			'Чтобы рекламировать свою продукцию на фестивале, Adidas создала временный магазинчик в виде обувной коробки.// (=магазин, который не является постоянным)',
		eng:
			"To advertise their products at a festival, Adidas set up a temporary outlet in the shape of a shoebox.//(=a shop that isn't permanent)",
	},
	{
		rus:
			'Обратите внимание, что мы добавили новую функцию всплывающего меню. //(=скрытое меню, которое появляется при щелчке правой кнопкой мыши)',
		eng:
			"Please note that we've added a new pop-up menu feature. //(=a hidden menu that appear when you right-click)",
	},
	{
		rus: 'В чем проблема? //(=как вы думаете, в чем проблема?)',
		eng:
			'What seems to be the problem? //(=what do you think is the problem?)',
	},
	{ rus: 'Чем могу помочь?', eng: 'What can I do for you?' },
	{
		rus:
			'У меня вопрос по поводу заказа, который мы сделали. //(=сделанный)',
		eng: 'I have a question about an order we placed. //(=made)',
	},
	{
		rus:
			'Не могли бы вы дать мне номер заказа и я проверю это. //(=исследовать проблему)',
		eng:
			"Could you give me the order number and I'll look into it. //(=investigate the problem)",
	},
	{
		rus: 'Позвольте мне уточнить. //(=прояснить)',
		eng: 'Let me get this straight. //(=clarify)',
	},
	{
		rus: 'Будет ли он готов к сроку сдачи? (предлог)',
		eng: 'Will it be ready in time for the deadline? ',
	},
	{
		rus: 'Мой экран продолжает гаснуть. //(=это неоднократно)',
		eng: 'My screen keeps going blank. //(=does it repeatedly)',
	},
	{
		rus:
			'Не могли бы вы объяснить, в чем проблема? //(=детально описать)',
		eng:
			'Could you explain exactly what the problem is? //(=describe in details)',
	},
	{
		rus: 'Расскажи мне об этом. //(=опишите мне проблему)',
		eng: 'Talk me through it. //(=describe the problem to me)',
	},
	{
		rus: 'Я скоро вам перезвоню. //(=скоро)',
		eng: "I'll get back to you shortly. //(=soon)",
	},
	{
		rus: 'Возможно, я смогу решить проблему. //(=решать)',
		eng: 'I might be able to sort out the problem. //(=solve)',
	},
	{
		rus: 'Вы можете сказать мне, есть ли у вас номер заказа?',
		eng: "Can you tell me if you've got an order number?",
	},
	{
		rus:
			'Как только я проверю детали, я вам перезвоню. //(=как только)',
		eng:
			"Once I've checked the details, I'll call you back. //(=as soon as)",
	},
	{
		rus: 'Ваша доставка прибыла в нерабочее время. (предлог)',
		eng: 'Your delivery arrived out of office hours. ',
	},
	{
		rus:
			'Не могли бы вы дать мне знать, сколько времени это займет? //(=сколько времени требуется)',
		eng:
			'Could you let me know how long it will take? //(=how much time is required)',
	},
	{
		rus: 'Мой экран продолжает гаснуть.',
		eng: 'My screen keeps going blank.',
	},
	{
		rus: 'Я скоро вам перезвоню. //(=с вами связаться)',
		eng: "I'll get back to you shortly. //(=contact you)",
	},
	{
		rus:
			'Могу я уточнить, о чем вы говорите? //(=перефразировать, чтобы сделать его более ясным)',
		eng:
			"Could I just clarify what you're saying? //(=rephrase to make it clearer)",
	},
	{
		rus: 'Я займусь этим прямо сейчас. //(=сразу)',
		eng: "I'll look into it straightaway. //(=immediately)",
	},
	{
		rus:
			'Если я правильно вас понял, компьютер продолжает перезагружаться. //(=получить это право)',
		eng:
			'If I understand you correctly, the computer keeps rebooting. //(=get it right)',
	},
	{
		rus:
			'Когда я работаю в офисе клиента, у меня нет доступа к нашей внутренней сети. (предлог)',
		eng:
			"When I work at the customer's office, I don't have access to our internal network. ",
	},
	{
		rus:
			'В этом проекте мы будем сотрудничать с некоторыми коллегами из британского офиса. //(=работать вместе)',
		eng:
			"On this project we're going to collaborate with some colleagues from the UK office. //(=work together)",
	},
	{
		rus:
			'На этой встрече я хотел бы сосредоточиться на кадровых вопросах. (предлог)',
		eng: "In this meeting I'd like to focus on our staffing issues. ",
	},
	{
		rus:
			'Удобный интерфейс позволяет легко взаимодействовать с нашим приложением. (предлог)',
		eng:
			'The user-friendly interface makes it very easy to interact with our app. ',
	},
	{
		rus:
			'На данный момент мы не можем понять, какое влияние наши изменения в приложении окажут на конечных пользователей. //(=эффект)',
		eng:
			"At the moment we can't understand the impact that our changes in the application will have on the end users. //(=effect)",
	},
	{
		rus:
			'Развитие технологий оказало огромное влияние на то, как мы работаем. (предлог)',
		eng:
			'The developments in technology have had a huge impact on the way we work. ',
	},
	{
		rus:
			'Одна из вещей, которые мы построили в комплект разработки программного обеспечения является возможность интеграции приложений друг с другом. //(=объединять)',
		eng:
			"One of the things that we've built into the software development kit is the ability to integrate applications with one another. //(=combine)",
	},
	{
		rus:
			'Необходимо подключить USB-кабель с компьютера к устройству. (предлог)',
		eng:
			'You need to connect the USB cable from your computer to your device. ',
	},
	{
		rus:
			'Для решения этой задачи необходим логический, аналитический подход. //(=очень внимательно изучает вещи)',
		eng:
			'To solve this problem you need a logical, analytical approach. //(=examining things very carefully)',
	},
	{
		rus:
			'Джон не очень общителен, он почти никогда не разговаривает со своими коллегами. // (=готов поговорить с людьми)',
		eng:
			'John is not very communicative, he hardly ever talks to his colleagues. //(=willing to talk to people)',
	},
	{
		rus:
			'Мой новый автомобиль действительно экономичен, он не использует много бензина. //(=использование ресурсов тщательно, без потерь)',
		eng:
			"My new car is really economical, it doesn't use much petrol. //(=using resources carefully, without wasting any)",
	},
	{
		rus:
			'Я подал заявление на перевод в другой отдел. //(=двигаться)',
		eng:
			"I've applied for a transfer to another department. //(=move)",
	},
	{
		rus:
			'Вчера на тренировке было пятнадцать участников. //(=присутствующий)',
		eng:
			'We had fifteen participants at the training session yesterday. //(=attendees)',
	},
	{
		rus:
			'Компания наняла консультанта по управлению, чтобы помочь с их стратегией на будущее. //(=тот, кто дает советы)',
		eng:
			'The company employed a management consultant to help with their strategy for the future. //(=someone who gives advice)',
	},
	{
		rus:
			'Наш новый продукт имеет новаторскую конструкцию. //(=новые, иные и лучшие, чем те, что существовали ранее)',
		eng:
			'Our new product has innovative design. //(=new, different and better than those that existed before)',
	},
	{
		rus:
			'В проекте приняли участие более десяти разработчиков. (предлог)',
		eng: 'More than ten developers were involved in the project. ',
	},
	{
		rus:
			'Легче взаимодействовать с товарищами по команде в телеконференции с включенными камерами. //(=общаться)',
		eng:
			"It's easier to interact with teammates in a teleconference call with the cams on. //(=communicate)",
	},
	{
		rus:
			'Прежде всего, мы должны сосредоточиться на улучшении отношений в команде. //(=уделять внимание)',
		eng:
			'First of all, we should focus on improving the relationships in the team. //(=give attention)',
	},
	{
		rus:
			'Мы провели опрос, чтобы узнать, что думают сотрудники о новой политике. //(=набор вопросов, которые вы задаете большому количеству людей)',
		eng:
			'We conducted a survey to find out what the employees think of the new policy. //(=a set of questions that you ask a large number of people)',
	},
	{
		rus:
			'Я стараюсь избегать работы из дома, так как слишком много отвлекающих факторов. //(=все, что мешает мне обращать внимание на то, что я делаю)',
		eng:
			"I try to avoid working from home as there are too many distractions. //(=things that stop me from paying attention to what I'm doing)",
	},
	{
		rus:
			'Наша компания имеет строгую политику по установке нового программного обеспечения. (предлог)',
		eng:
			'Our company has a strict policy on installing new software. ',
	},
	{
		rus:
			'Мобильная связь здесь ужасна! Можешь позвонить мне по стационарному телефону? //(=телефонное соединение, использующее провода)',
		eng:
			'The mobile connection is terrible here! Can you call me on the landline? //(=a telephone connection that uses wires)',
	},
	{
		rus:
			'Цифровые технологии привели к огромным изменениям в процессе работы. (предлог)',
		eng:
			'Digital technologies have brought about huge changes in our work process. ',
	},
	{
		rus:
			'Считаете ли вы, что компании должны ограничить время, которое их сотрудники могут тратить на сайты социальных сетей? //(=ограничивать)',
		eng:
			'Do you think companies should put limits on the time that their employees can spend on social networking sites? //(=restrict)',
	},
	{
		rus:
			'Мы провели опрос, чтобы выяснить, удовлетворены ли сотрудники текущими льготами. //(=проведенный)',
		eng:
			"We've conducted a survey to find out if the employees are satisfied with the current perks. //(=carried out)",
	},
];

const veryOldDictionary2: dictType[] = [
	{
		rus:
			'Variants в их многочисленных формах (полиморфный вариант, открытый вариант, GADT и др.), вероятно, являются фичей системы типов, такой как Reason.',
		eng:
			"Variants, in their many forms (polymorphic variant, open variant, GADT, etc.), are likely the feature of a type system such as Reason's.",
	},
	{
		rus:
			'Вышеупомянутый option, например, устраняет необходимость в типах, допускающих значение NULL, что является основным источником ошибок в других языках.',
		eng:
			'The aforementioned option variant, for example, obliterates the need for nullable types, a major source of bugs in other languages.',
	},
	{
		rus:
			'Философски выражаясь, проблема состоит из многих возможных ветвей/условия. Неправильное выполнение этих условий является основной частью того, что мы называем ошибками.',
		eng:
			'Philosophically speaking, a problem is composed of many possible branches/conditions. Mishandling these conditions is the majority of what we call bugs.',
	},
	{
		rus:
			'Система типов не устраняет ошибки волшебным образом; она указывает на необработанные условия и просит Вас покрыть их.',
		eng:
			"A type system doesn't magically eliminate bugs; it points out the unhandled conditions and asks you to cover them.",
	},
	{
		rus:
			"Способность правильно моделировать 'то или это' имеет решающее значение.",
		eng: "The ability to model 'this or that' correctly is crucial.",
	},
	{
		rus:
			'Например, некоторые люди задаются вопросом, как система типов может безопасно исключить плохо форматированные данные JSON из распространения в их программу.',
		eng:
			'For example, some folks wonder how the type system can safely eliminate badly formatted JSON data from propagating into their program.',
	},
	{
		rus:
			'Если синтаксический анализатор возвращает тип Option None / Some (актуальные данные), то вам придется явно обрабатывать случай None на более поздних вызовов.',
		eng:
			"If the parser returns the option type None | Some(actualData), then you'd have to handle the None case explicitly in later calls.",
	},
	{
		rus:
			'Система типов позволяет безопасно вносить большую категорию изменений в кодовые базы без необходимости понимать все это заранее.',
		eng:
			'A type system allows you to safely make a big category of changes to codebases without needing to understand the whole thing upfront.',
	},
	{
		rus:
			"Типы уменьшают уровни абстракций, необходимых для 'достижения цели', что в свою очередь уменьшает когнитивную нагрузку на вызывающих абонентов.",
		eng:
			"Types reduce the layers of abstractions needed to 'get things done', which in return reduces callers' cognitive burden.",
	},
	{
		rus:
			'Cам Reason не имеет понятия null или undefined. И это хорошо, так как это стирает целую категорию ошибок.',
		eng:
			"Reason itself doesn't have the notion of null or undefined. This is a great thing, as it wipes out an entire category of bugs.",
	},
	{
		rus:
			'option-to-undefined компиляция не идеальна, потому что с нашей стороны, значения option могут быть композироваться. Some(Some(5)).',
		eng:
			"The option-to-undefined translation isn't perfect, because on our side, option values can be composed.",
	},
	{
		rus:
			'Вам следует использовать list из за легкого изменения размера, быстрого добавления (добавления во голову) и его быстрого разделения, эти операции иммутабельны, но эффективны!',
		eng:
			"You'd use list for its resizability, its fast prepend (adding at the head), and its fast split, all of which are immutable yet efficient!",
	},
	{
		rus:
			'Новые записи могут быть созданы из старых записей спред оператором (...). Оригинальная запись не мутируется.',
		eng:
			"New records can be created from old records with the ... spread operator. The original record isn't mutated.",
	},
	{
		rus:
			"Поля записи могут быть опционально изменяемыми. Это позволяет обновлять эти поля на месте с помощью оператора '='.",
		eng:
			'Record fields can optionally be mutable. This allows you to update those fields in-place with the = operator.',
	},
	{
		rus:
			'Чтобы уменьшить избыточность, мы предоставляем punning для типов и значений записей.',
		eng:
			"To reduce redundancy, we provide punning for a record's types and values.",
	},
	{
		rus:
			'Punning это сокращение синтаксиса, которое вы можете использовать, когда имя поля и есть его значение.',
		eng:
			'Punning refers to the syntax shorthand you can use when the name of a field matches the name of its value/type',
	},
	{
		rus:
			'Если вы работаете с JavaScript, синтаксис записей и операции должны быть знакомы, и у вас может возникнуть соблазн взаимодействовать с JS, преобразовывая объект JS в запись и наоборот. Это прекрасно, но у нас есть еще лучший способ без накладных расходов!',
		eng:
			"If you're working with JavaScript, the record syntax & operations should feel familiar, and you might be tempted to interop with JS by converting a JS object to a record, and vice-versa. This is fine, but we have an even better way without conversion overhead!",
	},
	{
		rus: 'Типы записей находятся по имени поля',
		eng: 'Record Types Are Found By Field Name',
	},
	{
		rus:
			"С записями Вы не можете сказать (Я бы хотел, чтобы эта функция принимала любой тип записи, если у них есть поле 'age').",
		eng:
			"With records, you cannot say (I'd like this function to take any record type, as long as they have the field age).",
	},
	{
		rus:
			'Если определение типа находится в другом файле, необходимо явно указать, какой это файл.',
		eng:
			'If the type definition resides in another file, you need to explicitly indicate which file it is.',
	},
	{
		rus:
			'Если вам нужна такая возможность, используйте объекты Reason, описанные здесь.',
		eng:
			'If you need such capability, use Reason objects, described here.',
	},
	{
		rus:
			'После прочтения ограничения в предыдущих разделах, и если вы из динамического языка, вам может быть интересно, зачем заморачиваться с Record на первом месте, а не прямо через объект, поскольку Record-у необходима явная типизацию, и Record ... написать функцию, которая принимает разные типы записей, с одним и тем же именем поля , и т. д.',
		eng:
			"After reading the constraints in the previous sections, and if you're coming from a dynamic language background, you might be wondering why one would bother with record in the first place instead of straight using object, since the former needs explicit typing and doesn't allow different records with the same field name to be passed to the same function, etc.",
	},
	{
		rus:
			'Правда в том, что в большинстве случаев в вашем приложении форма ваших данных на самом деле фиксирована, и если это не так, она потенциально может быть лучше представлена как комбинация variant + record.',
		eng:
			"The truth is that most of the times in your app, your data's shape is actually fixed, and if it's not, it can potentially be better represented as a combination of variant + record instead.",
	},
	{
		rus:
			'Запись, так как ее поля фиксированы, компилируется в массив с доступом к индексу массива вместо JS объекта (попробуйте в playground!)',
		eng:
			'Record, since its fields are fixed, is compiled to an array with array index accesses instead of JS object (try it in the playground!).',
	},
	{
		rus:
			'В native запись компилируется в основную область памяти, где доступ к полю-это только один поиск поля + один фактический доступ, ака 2 инструкции по сборке.',
		eng:
			'On native, Record compiles to basically a region of memory where a field access is just one field lookup + one actual access, aka 2 assembly instructions.',
	},
	{
		rus:
			"Наконец, поскольку Тип записи определяется путем нахождения одного явного объявления типа (мы называем это 'номинальной типизацией'), сообщения об ошибках типа оказываются лучше, чем аналог ('структурная типизация', как для кортежей).",
		eng:
			"Finally, since a record type is resolved through finding that single explicit type declaration (we call this 'nominal typing'), the type error messages end up better than the counterpart ('structural typing', like for tuples).",
	},
	{
		rus:
			'Номинальная типизация облегчает рефакторинг; изменение полей типа записи, естественно, позволяет компилятору знать, что это все та же запись, просто неправильно используемая в некоторых местах. В противном случае при структурной типизации может быть трудно определить, является ли сайт определения или сайт использования неправильным.',
		eng:
			"Nominal typing makes refactoring easier; changing a record type's fields naturally allows the compiler to know that it's still the same record, just misused in some places. Otherwise, under structural typing, it might get hard to tell whether the definition site or the usage site is wrong.",
	},
	{
		rus: 'Лицезрите, жемчужина структур данных Reason!',
		eng: 'Behold, the crown jewel of Reason data structures!',
	},
	{
		rus:
			"Большинство структур данных на большинстве языков это 'то и это'. Variant позволяет выразить 'то или это'.",
		eng:
			"Most data structures in most languages are about 'this and that'. A variant allows us to express 'this or that'.",
	},
	{
		rus:
			'Примечание: конструкторы варианта должны быть с большой буквы.',
		eng: "Note: a variant's constructors need to be capitalized.",
	},
	{
		rus:
			'Вместе с variant приходит одна из самых важных фич Reason, выражение switch.',
		eng:
			'Along with a variant comes one of the most important features of Reason, the switch expression.',
	},
	{
		rus: 'Switch позволяет проверить все возможные кейсы variant.',
		eng:
			'Switch allows you to check every possible case of a variant.',
	},
	{
		rus:
			'Вариант имеет чрезвычайно богатое количество системной помощи от типизации.',
		eng:
			'A variant has an extremely rich amount of type system assistance.',
	},
	{
		rus:
			'Например, появится ошибка, если вы забыли покрыть кейс Вашего variant, или если кейс является избыточным.',
		eng:
			"For example, we'll give you a type error if you've forgotten to cover a case of your variant, or if two cases are redundant.",
	},
	{
		rus: 'Variant требует эксплицитного определения.',
		eng: 'Variant Needs an Explicit Definition',
	},
	{
		rus:
			'Если вариант, который вы используете, находится в другом файле, перенесите его в scope, как для записи.',
		eng:
			"If the variant you're using is in a different file, bring it into scope like you'd do for a record.",
	},
	{
		rus:
			"Обратите внимание, как использование конструктора похоже на вызов функции? Это не совпадение; есть причина, по которой данные конструктора называются 'аргументом конструктора'.",
		eng:
			"Notice how using a constructor is like calling a function? This isn't a coincidence; there's a reason why a constructor's data is called 'constructor argument'.",
	},
	{
		rus:
			'Стандартная библиотека предлагает два важных варианта, о которых вы много услышите. Optional. List.',
		eng:
			"The standard library exposes two important variants you'll come to hear a lot. Optional. List.",
	},
	{
		rus:
			'Знаете ли вы, что вы можете использовать switch для string, int, float, array и большинство других структур данных?',
		eng:
			'Did you know that you can use switch on string, int, float, array, and most other data structures?',
	},
	/* --------------------------------------------- */
	{
		rus:
			"Используйте структурное равенство осторожно. Это удобно, но может привести к случайному сравнению двух глубоко вложенных структур данных и снижению производительности. Также не всегда понятно, что считается 'равным'.",
		eng:
			"Use structural equal tastefully. It's convenient, but might accidentally make you compare two deeply nested data structures and incur a big performance hit. It's also not always clear what counts as 'equal'.",
	},
	{
		rus:
			'Нахрена я не могу просто использовать перегруженный + для обоих int и float?',
		eng:
			"Why the heck can't I just use an overloaded + for both int and float?",
	},
	{
		rus:
			'Кортежи иммутаблельные, упорядоченные, фиксированного размера во время создания размера, гетерогенные (могут содержать различные типы значений).',
		eng:
			'Tuples are immutable, ordered, fix-sized at creation time, heterogeneous (can contain different types of values).',
	},
	{
		rus:
			'Стандартная библиотека предоставляет fst и snd, удобные функции, которые позволяют получить доступ к первому и второму элементу 2-кортежа.',
		eng:
			'The standard library provides fst and snd, convenience functions that allow you to access the first and second element of a 2-tuple.',
	},
	{
		rus:
			'Обычно, вы получаете доступ к членам tuple путем деструктурирования.',
		eng:
			"Generally, you'd access tuple members through destructuring.",
	},
	{
		rus:
			'Кортежи не должны обновляться mutatively; вы следует создавать новые, разрушая старые.',
		eng:
			"Tuples aren't meant to be updated mutatively; you'd create new ones by destructuring the old ones.",
	},
	{
		rus:
			'Вы должны использовть кортежи в удобных ситуациях, которые нужно передать несколько значений без особых церемоний. Например, для возврата нескольких значений.',
		eng:
			"You'd use tuples in handy situations that pass around multiple values without too much ceremony. For example, to return many values.",
	},
	{
		rus:
			'Старайтесь использовать кортеж локально. Для доложивущих и часто передаваемых структур данных предпочтительнее использовать записи с именованными полями.',
		eng:
			'Try to keep the usage of tuple local. For data structures that are long-living and passed around often, prefer a record, which has named fields.',
	},
	{
		rus:
			'Комбинация tuple + switch очень мощная и лаконичная, и стирает целую категорию ошибок.',
		eng:
			'The combination of tuple + switch is very powerful and concise, and wipes out an entire category of bugs.',
	},
	{
		rus:
			"Существование кортежей может показаться странным для тех, кто приходит из нетипизированных языков. 'Почему бы просто не использовать список или массив?'",
		eng:
			"The existence of tuples might seem odd for those coming from untyped languages. 'Why not just use a list or array?'",
	},
	{
		rus:
			'Система типов не всемогуща и не должна быть такой; некоторые со вкусом подобранные компромиссы должны быть применены для того, чтобы язык был простым, производительным (как для компиляции, так и для скорости работы) и легким для понимания.',
		eng:
			"A type system isn't all-powerful, nor should it be; some tasteful trade-offs need to be applied in order to keep the language simple, performant (both compilation and running speed) and easy to understand.",
	},
	{
		rus:
			"Кортеж Reason типизируется 'структурно'. Это означает, что даже если Вы не аннотируете свои данные явным типом, компилятор все равно может вывести их, посмотрев на их содержимое, использование и т. д.",
		eng:
			"A Reason tuple is typed 'structurally'. This means that even if you don't annotate your data with an explicit type, the compiler can still deduce it by looking at its content, its usage, etc.",
	},
	{
		rus:
			'Типы-это изюминка Ризона! Здесь вы получаете представление о том, почему так много людей в восторге от них.',
		eng:
			'Types are the highlight of Reason! Here, you get a glimpse of why so many are excited about them.',
	},
	{
		rus:
			'Типы могут быть выведены. Система типов выводит типы для вас, даже если Вы не записываете их вручную. Это ускоряет фазу прототипирования.',
		eng:
			"Types can be inferred. The type system deduces the types for you even if you don't manually write them down. This speeds up the prototyping phase.",
	},
	{
		rus:
			'Покрытии типами - всегда 100%. Нам не нужен инструмент для проверки покрытия! Каждая часть кода на Reason имеет Тип.',
		eng:
			"The type coverage is always 100%. We don't need a 'type coverage' tool! Every piece of Reason code has a type.",
	},
	{
		rus:
			"Cистема типов полностью 'здравая'. Что означает, что пока код компилируется нормально, каждый Тип гарантирует, что он не лжет сам о себе.",
		eng:
			"The type system is completely 'sound'. This means that, as long as your code compiles fine, every type guarantees that it's not lying about itself.",
	},
	{
		rus:
			'Строки Reason отделяются двойными кавычками (одинарные кавычки зарезервированы для типа character).',
		eng:
			'Reason strings are delimited using double quotes (single quotes are reserved for the character type).',
	},
	{
		rus: 'Для конкатенации строк используйте ++.',
		eng: 'To concatenate strings, use ++.',
	},
	{
		rus:
			'Существует специальный синтаксис для строк, который позволяет делать многострочные строки, как и раньше, без специальных escape символов, хуки для специальных предпроцессоров.',
		eng:
			"There's a special syntax for string that allows multiline string just like before, no special character escaping, hooks for special pre-processors.",
	},
	{
		rus:
			'Поскольку строка Reason сопоставляется со строкой JavaScript, вы можете использовать строковые операции обеих стандартных библиотеках.',
		eng:
			'Since a Reason string maps to a JavaScript string, you can mix & match the string operations in both standard libraries.',
	},
	{
		rus:
			'Reason имеет тип для строки из одной буквы. Char не поддерживает Unicode или UTF-8.',
		eng:
			"Reason has a type for a string with a single letter. Char doesn't support Unicode or UTF-8.",
	},
	{
		rus:
			'Char компилируется в целое число от 0 до 255, для дополнительной скорости. Вы можете также паттерн-матчинг на нем.',
		eng:
			'A character compiles to an integer ranging from 0 to 255, for extra speed. You can also pattern-match on it.',
	},
	{
		rus: 'Я ем бананы каждый день. Я люблю бананы. // счетный',
		eng: 'I eat a banana every day. I like bananas. // countable',
	},
	{
		rus: 'Я ем рис каждый день. Я люблю рис. // неисчислимый',
		eng: 'I eat rice every day. I like rice. // uncountable',
	},
	{
		rus:
			'Счетное существительное может быть в единственном числе (банан) или во множественном (бананы).',
		eng:
			'A countable noun can be singular (banana) or plural (bananas).',
	},
	{
		rus: 'Несчетное существительное имеет только одну форму (рис).',
		eng: 'An uncountable noun has only one form (rice).',
	},
	{
		rus:
			"Мы можем использовать числа со счетными существительными. Поэтому мы можем сказать, 'банан', 'два банана' и т. д.",
		eng:
			"We can use numbers with countable nouns. So we can say 'one banana', 'two bananas' etc.",
	},
	{
		rus:
			"Мы не можем использовать числа с исчисляемыми существительными. Мы не можем сказать один рис', 'два риса' и т. д.",
		eng:
			"We cannot use numbers with uncountable nouns. We cannot say 'one rice', 'two rices' etc.",
	},
	{
		rus: 'Катя пела песню.',
		eng: 'Kate was singing a song.',
	},
	{
		rus: 'Рядом есть хороший пляж.',
		eng: "There's a nice beach near here.",
	},
	{
		rus: 'У тебя есть десятифунтовая купюра?',
		eng: 'Do you have a ten-pound note?',
	},
	{
		rus:
			'Это была не твоя вина. Это был несчастный случай. В рации нет батареек.',
		eng:
			"It wasn't your fault. It was an accident. There were no batteries in the radio.",
	},
	{
		rus: 'У нас недостаточно чашек.',
		eng: "We don't have enough cups.",
	},
	{
		rus: 'Кейт слушала музыку.',
		eng: 'Kate was listening to (some) music.',
	},
	{
		rus: 'В моих ботинках песок.',
		eng: "There's sand in my shoes.",
	},
	{
		rus: 'У тебя есть деньги?',
		eng: 'Do you have any money?',
	},
	{
		rus: 'Это была не твоя вина. Это было невезение.',
		eng: "It wasn't your fault. It was bad luck.",
	},
	{
		rus: 'В этом доме нет электричества.',
		eng: 'There is no electricity in this house.',
	},
	{
		rus: 'У нас недостаточно воды.',
		eng: "We don't have enough water.",
	},
	{
		rus:
			'Нельзя использовать исчисляемыt существительныt в единственном числе без the/my/some etc. Я хочу банан. Произошел несчастный случай.',
		eng:
			"You cannot use singular countable nouns alone (without a/the/my etc.). I want a banana. (not I want banana). There's been an accident, (not There's been accident)",
	},
	{
		rus:
			'Вы можете использовать множественное число счетных существительных без артиклей. Я люблю бананы. ( бананы вообще). Несчастные случаи могут быть предотвращены.',
		eng:
			'You can use plural countable nouns alone. I like bananas. ( bananas in general). Accidents can be prevented.',
	},
	{
		rus:
			'Вы можете использовать неисчисляемые существительные без the/my/some etc.): Я ем рис каждый день. На твоей рубашке кровь. Вы слышите музыку?',
		eng:
			"You can use uncountable nouns alone (without the/my/some etc.): I eat rice every day. There's blood on your shirt. Can you hear music?",
	},
	{
		rus:
			'Вы можете использовать some и any с исчисляемыми существительными во множественном числе и неисчисляемые существительные!',
		eng:
			'You can use some and any with plural countable nouns and with uncountable nouns!',
	},
	{
		rus: 'Мы спели несколько песен. Ты купил яблоки?',
		eng: 'We sang some songs. Did you buy any apples?',
	},
	{
		rus: 'Мы слушали музыку. Вы покупали яблочный сок?',
		eng: 'We listened to some music. Did you buy any apple juice?',
	},
	{
		rus:
			'Мы используем many и few с множественным числом исчисляемых существительных: мы не сделали много снимков. Мне нужно кое-что сделать.',
		eng:
			"We use many and few with plural countable nouns: We didn't take many pictures. I have a few things to do.",
	},
	{
		rus:
			'Мы используем much и little с бесчисленными существительными: мы не делали много покупок. Мне нужно немного поработать.',
		eng:
			"We use much and little with uncountable nouns: We didn't do much shopping. I have a little work to do.",
	},
	{
		rus:
			'Многие существительные могут использоваться как счетные или бесчисленные существительные, обычно с разницей в значении.',
		eng:
			'Many nouns can be used as countable or uncountable nouns, usually with a difference in meaning.',
	},
	{
		rus: 'Ты только что слышала шум? // (специфический шум)',
		eng: 'Did you hear a noise just now? // (a specific noise)',
	},
	{
		rus:
			'Я не могу здесь работать. Слишком много шума. // (шум в целом)',
		eng:
			"I can't work here. There's too much  noise. // (noise in general)",
	},
	{
		rus: 'Я купил газету, чтобы почитать. // (= газета)',
		eng: 'I bought a paper to read. // (= a newspaper)',
	},
	{
		rus:
			'Мне нужна бумага, чтобы писать. // (= материал для написания на)',
		eng:
			'I need some paper to write on. // (= material for writing on)',
	},
	{
		rus: 'У меня в супе волосок остался! // (= один волос)',
		eng: "There's a hair in my soup! // (= one single hair)",
	},
	{
		rus:
			'У тебя очень длинные волосы // (не волосы - все волосы на голове)',
		eng:
			"You've got very long hair. // (not hairs - all the hair on your head)",
	},
	{
		rus:
			'Ты можешь остаться с нами. Есть свободная комната. // (= комната в доме)',
		eng:
			"You can stay with us. There's a spare room. // (= a room in a house)",
	},
	{
		rus: 'Ты не можешь здесь сидеть. Нет.  // (= пространство)',
		eng: "You can't sit here. There isn't room.  // (= space)",
	},
	{
		rus:
			'Во время путешествия у меня было несколько интересных впечатлений.',
		eng: 'I had some interesting experiences while I was travelling.',
	},
	{
		rus: 'Они предложили мне работу, потому что у меня много опыта.',
		eng: 'They offered me the job because I had a lot of experience.',
	},
	{
		rus: 'Приятного путешествия. Желаю хорошо провести время!',
		eng: 'Enjoy your trip. Have a good time!',
	},
	{
		rus: 'Не могу дождаться. У меня нет на это времени.',
		eng: "I can't wait. I don't have time.",
	},
	{
		rus:
			'Кофе/чай/сок/пиво etc. (напитки) обычно неисчислимы: я не очень люблю кофе. Но вы можете сказать, что кофе //кофе// две чашки кофе //две чашки// и т. д.',
		eng:
			"Coffee/tea/juice/beer etc. (drinks) are normalLy uncountable: I don't like coffee very much. But you can say a coffee //a cup of coffee//, two coffees //two cups// etc.",
	},
	{
		rus: 'Два кофе и апельсиновый сок, пожалуйста.',
		eng: 'Two coffees and an orange juice, please.',
	},
	{
		rus: 'Я ищу работу. Я ищу работу. // (не работа)',
		eng:
			"I'm looking for a job. I'm looking for work. // (not a work)",
	},
	{
		rus: 'Какой прекрасный вид! Какой прекрасный пейзаж!',
		eng: 'What a beautiful view! What beautiful scenery!',
	},
	{
		rus: 'Сегодня прекрасный день. Сегодня хорошая погода.',
		eng: "It's a nice day today. It's nice weather today.",
	},
	{
		rus:
			'У нас было много сумок и чемоданов. У нас было много багажа, багажа.',
		eng:
			'We had a lot of bags and cases. We had a lot of baggage, luggage.',
	},
	{
		rus: 'Эти стулья принадлежат мне. Эта мебель принадлежит мне.',
		eng: 'These chairs are mine. This furniture is mine.',
	},
	{
		rus: 'Это хорошее предложение. Это хороший совет.',
		eng: "That's a good suggestion. That's good advice.",
	},
];

const oldOldDictionary2: dictType[] = [
	/* ************************************************************************************************************************** */
	{
		rus:
			'Но для этого требуется немного больше ввода, чем при традиционной двусторонней привязке данных.',
		eng:
			'But it does require a little more typing than traditional two-way data binding.',
	},
	{
		rus:
			'React делает этот поток данных явным, чтобы было легко понять, как работает ваша программа.',
		eng:
			'React makes this data flow explicit to make it easy to understand how your program works.',
	},
	{
		rus:
			'Мы хотим убедиться, что всякий раз, когда пользователь изменяет форму, мы обновляем состояние, чтобы отразить пользовательский ввод.',
		eng:
			'We want to make sure that whenever the user changes the form, we update the state to reflect the user input.',
	},
	{
		rus:
			'Поскольку компоненты должны обновлять только свое собственное состояние, FilterableProductTable передаст обратные вызовы в панель поиска, которая будет срабатывать всякий раз, когда состояние должно быть обновлено.',
		eng:
			'Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.',
	},
	{
		rus:
			'Хотя это звучит сложно, на самом деле это всего лишь несколько строк кода.',
		eng:
			"Though this sounds complex, it's really just a few lines of code.",
	},
	{
		rus:
			'И это действительно ясно, как ваши данные текут по всему приложению.',
		eng:
			"And it's really explicit how your data is flowing throughout the app.",
	},
	{
		rus:
			'Надеюсь, это даст вам представление о том, как строить компоненты и приложения с помощью React.',
		eng:
			'Hopefully, this gives you an idea of how to think about building components and applications with React.',
	},
	{
		rus:
			'Хотя это может быть немного больше печатания, чем вы привыкли.',
		eng: "While it may be a little more typing than you're used to",
	},
	{
		rus:
			'Помните, что код читается гораздо больше раз, чем пишется, и очень легко читать этот модульный, явный код.',
		eng:
			"Remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code.",
	},
	{
		rus:
			'Когда вы начнете создавать большие библиотеки компонентов, вы оцените эту эксплицитность и модульность.',
		eng:
			"As you start to build large libraries of components, you'll appreciate this explicitness and modularity.",
	},
	{
		rus:
			'И при переиспользовании кода ваши строки кода начнут сжиматься.',
		eng:
			'And with code reuse, your lines of code will start to shrink.',
	},
	{
		rus:
			'ОК, мы определили, что такое минимальный набор состояния приложения.',
		eng:
			"OK, so we've identified what the minimal set of app state is.",
	},
	{
		rus:
			'Далее нам нужно определить, какой компонент мутирует или владеет этим состоянием.',
		eng:
			'Next, we need to identify which component mutates, or owns, this state.',
	},
	{
		rus:
			'Запомните: React это односторонний поток данных по иерархии компонентов.',
		eng:
			'Remember: React is all about one-way data flow down the component hierarchy.',
	},
	{
		rus:
			'Может быть, не сразу ясно, какой компонент должен владеть каким состоянием.',
		eng:
			'It may not be immediately clear which component should own what state.',
	},
	/* https:reactjs.org/docs/reconciliation.html */
	{
		rus:
			'Компонент более высокого порядка (HOC) - это продвинутая техника в React для повторного использования компонентной логики. Hoc не являются частью React API, как токовые. Это паттерны, которые возникают из композиционной природы React.',
		eng:
			"A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React's compositional nature.",
	},
	{
		rus:
			'Конкретно, компонент более высокого порядка является функцией, которая берет компонент и возвращает новый компонент.',
		eng:
			'Concretely, a higher-order component is a function that takes a component and returns a new component.',
	},
	{
		rus:
			"HOCs распространены в сторонних библиотеках React, таких как connect Redux и Relay's createFragmentContainer.",
		eng:
			"HOCs are common in third-party React libraries, such as Redux's connect and Relay's createFragmentContainer.",
	},
	{
		rus:
			'В этом документе мы обсудим, почему компонет более высокого порядка полезны и как написать свои собственные.',
		eng:
			"In this document, we'll discuss why higher-order components are useful, and how to write your own.",
	},
	{
		rus:
			'Компоненты-основная единица повторного использования кода в React. Однако, вы обнаружите, что некоторые патерны не подходят для традиционных компонентов.',
		eng:
			"Components are the primary unit of code reuse in React. However, you'll find that some patterns aren't a straightforward fit for traditional components.",
	},
	{
		rus:
			'Мы хотим абстракцию, которая позволяет определить эту логику в одном месте и разделить ее между многими компонентами.',
		eng:
			'We want an abstraction that allows us to define this logic in a single place and share it across many components.',
	},
	{
		rus: 'Здесь компоненты более высокого порядка превосходят все.',
		eng: 'This is where higher-order components excel.',
	},
	{
		rus:
			'Обратите внимание, что HOC не изменяет входной компонент и не использует наследование для копирования его поведения.',
		eng:
			"Note that a HOC doesn't modify the input component, nor does it use inheritance to copy its behavior.",
	},
	{
		rus:
			'Скорее, HOC составляет исходный компонент, заключая его в компонент контейнера.',
		eng:
			'Rather, a HOC composes the original component by wrapping it in a container component.',
	},
	{
		rus: 'HOC-это чистая функция с нулевыми побочными эффектами.',
		eng: 'A HOC is a pure function with zero side-effects.',
	},
	{
		rus:
			'И это все! Обернутый компонент получает все реквизиты контейнера вместе с новым реквизитом, данные, которые он использует для визуализации своих выходных данных.',
		eng:
			"And that's it! The wrapped component receives all the props of the container, along with a new prop, data, which it uses to render its output.",
	},
	{
		rus:
			'HOC не имеет отношения к тому, как и почему используются данные, и обернутый компонент не связан с тем, откуда пришли данные.',
		eng:
			"The HOC isn't concerned with how or why the data is used, and the wrapped component isn't concerned with where the data came from.",
	},
	{
		rus:
			'Как в компонентах, контракт между withSubscription и обернутым компонентом полностью основан на props.',
		eng:
			'Like components, the contract between withSubscription and the wrapped component is entirely props-based.',
	},
	{
		rus:
			'Это упрощает замену одного HOC на другой, если они предоставляют одинаковые props для обернутого компонента. Это может быть полезно, например, при изменении библиотек фетчинга данных.',
		eng:
			'This makes it easy to swap one HOC for a different one, as long as they provide the same props to the wrapped component. This may be useful if you change data-fetching libraries, for example.',
	},
	{
		rus: 'Не изменяйте исходный компонент. Используйте копозицию.',
		eng: "Don't Mutate the Original Component. Use Composition.",
	},
	{
		rus:
			'Вместо мутации HOCs следует использовать композицию, заключив входной компонент в компонент-контейнер.',
		eng:
			'Instead of mutation, HOCs should use composition, by wrapping the input component in a container component.',
	},
	{
		rus:
			'Этот HOC имеет ту же функциональность, что и мутирующая версия, избегая при этом возможности столкновений.',
		eng:
			'This HOC has the same functionality as the mutating version while avoiding the potential for clashes.',
	},
	{
		rus:
			'Он одинаково хорошо работает с класс и функциональными компонентами.',
		eng:
			'It works equally well with class and functional components.',
	},
	{
		rus:
			'И потому, что это чистая функция, он компонуем с другими HOC, или даже с самим собой.',
		eng:
			"And because it's a pure function, it's composable with other HOCs, or even with itself.",
	},
	{
		rus:
			'Возможно, вы заметили сходство между HOCs и паттерном, называемым контейнер-компоненты.',
		eng:
			'You may have noticed similarities between HOCs and a pattern called container components.',
	},
	{
		rus:
			'Контейнерные компоненты являются частью стратегии разделения ответственности между задачами высокого и низкого уровня.',
		eng:
			'Container components are part of a strategy of separating responsibility between high-level and low-level concerns.',
	},
	{
		rus:
			'Контейнеры управляют такими вещами, как подписки и состояние, и передают props компонентам, которые обрабатывают такие вещи, как рендеринг UI. HOCs используют контейнеры как часть их реализации.',
		eng:
			'Containers manage things like subscriptions and state, and pass props to components that handle things like rendering UI. HOCs use containers as part of their implementation.',
	},
	{
		rus:
			'HOCs можно рассматривать как параметризованные определения контейнер-компонента.',
		eng:
			'You can think of HOCs as parameterized container component definitions.',
	},
	{
		rus:
			'Соглашение: Передавать несвязанные props через обернутый компонент.',
		eng:
			'Convention: Pass Unrelated Props Through to the Wrapped Component',
	},
	{
		rus:
			'HOCs должны пропускать props, которые не связаны с его конкретной работой.',
		eng:
			'HOCs should pass through props that are unrelated to its specific concern.',
	},
	{
		rus: 'Конвенция: максимизация Композиционности',
		eng: 'Convention: Maximizing Composability',
	},
	{
		rus:
			'Не все HOCs выглядят одинаково. Иногда они принимают только один аргумент, обернутый компонент. WithRouter.',
		eng:
			'Not all HOCs look the same. Sometimes they accept only a single argument, the wrapped component. WithRouter.',
	},
	{
		rus:
			'Соглашение: Оберните отображаемоё имя для упрощения отладки.',
		eng: 'Convention: Wrap the Display Name for Easy Debugging.',
	},
	{
		rus:
			'Предостережения. Компоненты более высокого порядка имеют несколько предостережений, которые не сразу очевидны, если вы новичок в React.',
		eng:
			"Caveats. Higher-order components come with a few caveats that aren't immediately obvious if you're new to React.",
	},
	{
		rus:
			'Не используйте HOCs внутри метода рендеринга. Проблема здесь не только в производительности - перемонтирование компонента приводит к потере состояния этого компонента и всех его дочерних элементов.',
		eng:
			"Don-t Use HOCs Inside the render Method. The problem here isn't just about performance — remounting a component causes the state of that component and all of its children to be lost.",
	},
	{
		rus:
			'Хотя соглашение для HOC - пропустить все props к обернутому компоненту, это не работает для ссылок. Это потому, что ref на самом деле не prop — как и key, он обрабатывается специально React-ом.',
		eng:
			"While the convention for higher-order components is to pass through all props to the wrapped component, this does not work for refs. That's because ref is not really a prop — like key, it's handled specially by React.",
	},
	{
		rus:
			"Термин 'Render prop' относится к простой технике обмена кодом между компонентами React с использованием prop, значение которого является функцией.",
		eng:
			"The term 'render prop' refers to a simple technique for sharing code between React components using a prop whose value is a function.",
	},
	{
		rus:
			'Компонент с Render prop принимает функцию, которая возвращает элемент React и вызывает его вместо реализации собственной логики render.',
		eng:
			'A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.',
	},
	{
		rus:
			'В этом документе мы обсудим, почему рендер props полезны, и как написать свои собственные.',
		eng:
			"In this document, we'll discuss why render props are useful, and how to write your own.",
	},
	{
		rus: 'Используйте Render Props для Пересекающихся Задач',
		eng: 'Use Render Props for Cross-Cutting Concerns',
	},
	{
		rus:
			'Компоненты являются основной единицей переиспользования кода в React, но не всегда очевидно, как поделиться состоянием или поведением, которое один компонент инкапсулирует, с другими компонентами, которые нуждаются в том же состоянии.',
		eng:
			"Components are the primary unit of code reuse in React, but it's not always obvious how to share the state or behavior that one component encapsulates to other components that need that same state.",
	},
	{
		rus:
			'Теперь вопрос: Как мы можем переиспользовать это поведение в другом компоненте?',
		eng:
			'Now the question is: How can we reuse this behavior in another component?',
	},
	{
		rus:
			'Другими словами, если другой компонент должен знать о положении курсора, можем ли мы инкапсулировать это поведение, чтобы мы могли легко поделиться им с этим компонентом?',
		eng:
			'In other words, if another component needs to know about the cursor position, can we encapsulate that behavior so that we can easily share it with that component?',
	},
	{
		rus:
			'Теперь, вместо того, чтобы эффективно клонировать Mouse компонент и жестко кодировать что-то еще в его Render методе для решения для конкретного случая использования, мы предоставляем Render prop, который Mouse может использовать для динамического определения того, что он отображает.',
		eng:
			'Now, instead of effectively cloning the Mouse component and hard-coding something else in its render method to solve for a specific use case, we provide a render prop that Mouse can use to dynamically determine what it renders.',
	},
	{
		rus:
			'Более конкретно, Render prop-это функция prop, которую компонент использует, чтобы знать, что рендерить.',
		eng:
			'More concretely, a render prop is a function prop that a component uses to know what to render.',
	},
	{
		rus:
			'Этот метод делает поведение, которое нам нужно разделить, чрезвычайно портативным.',
		eng:
			'This technique makes the behavior that we need to share extremely portable.',
	},
	{
		rus:
			'Чтобы получить такое поведение, отрисуйте Mouse с помощью Render prop, которая говорит ему, что отрисовать с текущим (x, y) курсора.',
		eng:
			'To get that behavior, render a <Mouse> with a render prop that tells it what to render with the current x, y of the cursor.',
	},
	{
		rus:
			'Одна интересной вещью о Render props, которую следуюет отметить, является то, что вы можете реализовать большинство компонентов более высокого порядка (HOC), используя обычный компонент с Render prop.',
		eng:
			'One interesting thing to note about render props is that you can implement most higher-order components (HOC) using a regular component with a render prop.',
	},
	{
		rus:
			'Таким образом, использование Render prop позволяет использовать любой шаблон.',
		eng:
			'So using a render prop makes it possible to use either pattern.',
	},
	{
		rus:
			'Это умолчанию, при рекурсии на дочерних узлах DOM, React просто перебирает оба списка дочерних узлов одновременно и генерирует мутацию всякий раз, когда есть разница.',
		eng:
			"By default, when recursing on the children of a DOM node, React just iterates over both lists of children at the same time and generates a mutation whenever there's a difference.",
	},
	{
		rus:
			'Когда у детей есть ключи, React использует ключ для сопоставления детей в исходном дереве с детьми в последующем дереве.',
		eng:
			'When children have keys, React uses the key to match children in the original tree with children in the subsequent tree.',
	},
	{
		rus:
			'На практике найти ключ обычно не сложно. Элемент, который вы собираетесь отобразить, может уже иметь уникальный ID, поэтому ключ может просто прийти из ваших данных.',
		eng:
			'In practice, finding a key is usually not hard. The element you are going to display may already have a unique ID, so the key can just come from your data.',
	},
	{
		rus:
			'Когда это не так, вы можете добавить новое свойство ID в свою модель или хэшировать некоторые части контента для создания ключа.',
		eng:
			"When that's not the case, you can add a new ID property to your model or hash some parts of the content to generate a key.",
	},
	{
		rus:
			'Ключ должен быть уникальным только среди своих братьев и сестер, а не глобально уникальным.',
		eng:
			'The key only has to be unique among its siblings, not globally unique.',
	},
	{
		rus:
			'Переупорядочивание может также вызвать проблемы с состоянием компонента, когда индексы используются в качестве ключей.',
		eng:
			'Reorders can also cause issues with component state when indexes are used as keys.',
	},
	{
		rus:
			'Важно помнить, что алгоритм согласования - это деталь реализации.',
		eng:
			'It is important to remember that the reconciliation algorithm is an implementation detail.',
	},
	{
		rus:
			'React может перерендеривать все приложение на каждое действие; конечный результат будет одинаковым.',
		eng:
			'React could rerender the whole app on every action; the end result would be the same.',
	},
	{
		rus:
			'Чтобы быть ясным, rerender в этом контексте означает вызов render для всех компонентов, это не значит, что React размонтирует и перемонтирует их. Он будет применять только различия в соответствии с Правилами, изложенными в предыдущих разделах.',
		eng:
			"Just to be clear, rerender in this context means calling render for all components, it doesn't mean React will unmount and remount them. It will only apply the differences following the rules stated in the previous sections.",
	},
	{
		rus:
			'Мы регулярно совершенствуем эвристику, чтобы ускорить общие случаи использования.',
		eng:
			'We are regularly refining the heuristics in order to make common use cases faster.',
	},
	{
		rus:
			'В текущей реализации вы можете выразить тот факт, что поддерево было перемещено среди его братьев и сестер, но Вы не можете сказать, что оно переместилось куда-то еще.',
		eng:
			'In the current implementation, you can express the fact that a subtree has been moved amongst its siblings, but you cannot tell that it has moved somewhere else.',
	},
	{
		rus:
			'Поскольку React полагается на эвристики, если допущения, лежащие в их основе, не будут выполнены, производительность пострадает.',
		eng:
			'Because React relies on heuristics, if the assumptions behind them are not met, performance will suffer.',
	},
	{
		rus:
			'Алгоритм не будет пытаться сопоставить поддеревья различных типов компонентов.',
		eng:
			'The algorithm will not try to match subtrees of different component types.',
	},
	{
		rus:
			'Если вы видите себя чередующимся между двумя типами компонентов с очень похожими выходными данными, вы можете сделать его тем же типом. На практике мы не обнаружили, что это проблема.',
		eng:
			"If you see yourself alternating between two component types with very similar output, you may want to make it the same type. In practice, we haven't found this to be an issue.",
	},
	{
		rus:
			'Нестабильные ключи (как те, которые производятся Math.random()) приведет к ненужному воссозданию многих экземпляров компонентов и узлов DOM, что может привести к снижению производительности и потере состояния в дочерних компонентах',
		eng:
			'Unstable keys (like those produced by Math.random()) will cause many component instances and DOM nodes to be unnecessarily recreated, which can cause performance degradation and lost state in child components.',
	},
	/* https:reactjs.org/docs/reconciliation.html */
	{
		rus:
			'Приведенные ниже примеры были обновлены для использования React.createRef() API, представленый в React 16.3. Если используется более раннюю версию React, мы рекомендуем использовать callback refs.',
		eng:
			'The examples below have been updated to use the React.createRef() API introduced in React 16.3. If you are using an earlier release of React, we recommend using callback refs instead.',
	},
	{
		rus: 'Значение ref отличается в зависимости от типа узла.',
		eng:
			'The value of the ref differs depending on the type of the node.',
	},
	{
		rus:
			'Когда атрибут ref используется на HTML-элементе, ref, созданный в конструкторе с React.createRef(), получает Базовый элемент DOM в качестве текущего свойства.',
		eng:
			'When the ref attribute is used on an HTML element, the ref created in the constructor with React.createRef() receives the underlying DOM element as its current property.',
	},
	{
		rus:
			'Когда атрибут ref используется на компоненте пользовательского класса, объект ref получает смонтированный экземпляр компонента в качестве текущего.',
		eng:
			'When the ref attribute is used on a custom class component, the ref object receives the mounted instance of the component as its current.',
	},
	{
		rus:
			'Вы не можете использовать атрибут ref для функциональных компонентов, потому что у них нет экземпляров.',
		eng:
			"You may not use the ref attribute on functional components because they don't have instances.",
	},
	{
		rus: 'Этот код использует ref для хранения ссылки на узел DOM.',
		eng: 'This code uses a ref to store a reference to a DOM node',
	},
	{
		rus:
			'React присваивает текущему свойству элемент DOM при монтировании компонента и присваивает ему обратно значение null при размонтировании.',
		eng:
			'React will assign the current property with the DOM element when the component mounts, and assign it back to null when it unmounts.',
	},
	{
		rus:
			'Обновления рефов происходят до componentdidmount или componentdidupdate хуков жизненного цикла.',
		eng:
			'ref updates happen before componentDidMount or componentDidUpdate lifecycle hooks.',
	},
	{
		rus:
			'Вы должны преобразовать компонент в класс, если вам нужен реф на него, так же, как вы делаете, когда вам нужны методы жизненного цикла или состояние.',
		eng:
			'You should convert the component to a class if you need a ref to it, just like you do when you need lifecycle methods or state.',
	},
	{
		rus:
			'В редких случаях вам может потребоваться доступ к ДОЧЕРНЕМУ узлу DOM из родительского компонента.',
		eng:
			"In rare cases, you might want to have access to a child's DOM node from a parent component.",
	},
	{
		rus:
			'Обычно это не рекомендуется, поскольку это нарушает инкапсуляцию компонентов, но иногда это может быть полезно для запуска фокуса или измерения размера или положения дочернего узла DOM.',
		eng:
			'This is generally not recommended because it breaks component encapsulation, but it can occasionally be useful for triggering focus or measuring the size or position of a child DOM node.',
	},
	{
		rus:
			'Если Вы используете React 16.3 или выше, мы рекомендуем использовать ref forwarding для этих случаев.',
		eng:
			'If you use React 16.3 or higher, we recommend to use ref forwarding for these cases.',
	},
	{
		rus:
			'Ref forwarding позволяет компонентам выбрать отображение рефа любого дочернего компонента как собственного.',
		eng:
			"Ref forwarding lets components opt into exposing any child component's ref as their own.",
	},
	{
		rus:
			'Вы можете найти подробный пример того, как предоставить дочерний узел DOM родительскому компоненту в документации ref forwarding.',
		eng:
			"You can find a detailed example of how to expose a child's DOM node to a parent component in the ref forwarding documentation.",
	},
	/* https:reactjs.org/docs/refs-and-the-dom.html */
	{
		rus:
			'В типичном потоке данных React props - это единственный способ взаимодействия родительских компонентов со своим дочерними элементами.',
		eng:
			'In the typical React dataflow, props are the only way that parent components interact with their children.',
	},
	{
		rus:
			'Чтобы изменить ребенка, вы перерисовываете его с новыми реквизитами.',
		eng: 'To modify a child, you re-render it with new props.',
	},
	{
		rus:
			'Однако, есть несколько случаев, когда вам нужно обязательно изменить дочерний элемент вне обычного потока данных.',
		eng:
			'However, there are a few cases where you need to imperatively modify a child outside of the typical dataflow.',
	},
	{
		rus:
			'Изменяемый дочерний элемент может быть экземпляром компонента React или элементом DOM. В обоих случаях React обеспечивает аварийный люк.',
		eng:
			'The child to be modified could be an instance of a React component, or it could be a DOM element. For both of these cases, React provides an escape hatch.',
	},
	{
		rus:
			'Есть несколько хороших вариантов использования рефов: управление фокусом, выбор текста или воспроизведение мультимедиа. Запуск императивной анимации. Интеграция со сторонними библиотеками дом.',
		eng:
			'There are a few good use cases for refs: Managing focus, text selection, or media playback. Triggering imperative animations. Integrating with third-party DOM libraries.',
	},
	{
		rus:
			'Избегайте использования ссылок для всего, что может быть сделано декларативно.',
		eng:
			'Avoid using refs for anything that can be done declaratively.',
	},
	{
		rus:
			'Например, вместо того, чтобы открывать методы open() и close() в компоненте диалога, передайте ему isOpen prop.',
		eng:
			'For example, instead of exposing open() and close() methods on a Dialog component, pass an isOpen prop to it.',
	},
	{
		rus:
			"Ваше первое намерение может быть использовать ref-ы, чтобы 'сделать, чтобы что-то произошло' в вашем приложении.",
		eng:
			"Your first inclination may be to use refs to 'make things happen' in your app.",
	},
	{
		rus:
			'Если это так, выделите минутку и подумайте более критически о том, кому state должно принадлежать в иерархии компонентов.',
		eng:
			'If this is the case, take a moment and think more critically about where state should be owned in the component hierarchy.',
	},
	{
		rus:
			"Часто становится ясно, что надлежащее место для 'владения' этим state находится на более высоком уровне в иерархии. См. руководство по поднятию состояния и примеры.",
		eng:
			"Often, it becomes clear that the proper place to 'own' that state is at a higher level in the hierarchy. See the Lifting State Up guide for examples of this.",
	},
	{
		rus:
			'По мере роста вашего приложения, вы можете поймать много ошибок с помощью проверки типов.',
		eng:
			'As your app grows, you can catch a lot of bugs with typechecking.',
	},
	{
		rus:
			'Для некоторых приложений можно использовать JavaScript расширения, такие как Flow или TypeScript для проверки всего приложения.',
		eng:
			'For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application.',
	},
	{
		rus:
			'React имеет некоторые встроенные возможности проверки типов.',
		eng: 'React has some built-in typechecking abilities.',
	},
	{
		rus:
			'Чтобы выполнить проверку типов для props компонента, можно назначить специальное propTypes свойство.',
		eng:
			'To run typechecking on the props for a component, you can assign the special propTypes property.',
	},
	{
		rus:
			'PropTypes содержит ряд валидаторов, которые могут быть использованы, чтобы убедиться, что данные, которые вы получаете, валидны.',
		eng:
			'PropTypes exports a range of validators that can be used to make sure the data you receive is valid.',
	},
	{
		rus:
			'Если для prop указано недопустимое значение, в консоли JavaScript будет показано предупреждение.',
		eng:
			'When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.',
	},
	{
		rus:
			'По соображениям производительности propTypes проверяется только в development режиме.',
		eng:
			'For performance reasons, propTypes is only checked in development mode.',
	},
	{
		rus:
			'С PropTypes.element можно указать, что только один дочерний элемент может быть передан компоненту как childred.',
		eng:
			'With PropTypes.element you can specify that only a single child can be passed to a component as children.',
	},
	{
		rus:
			'Можно определить значения по умолчанию для props, присвоив специальное свойство defaultProps.',
		eng:
			'You can define default values for your props by assigning to the special defaultProps property.',
	},
	{
		rus:
			'Если вы используете Babel преобразование, такое как transform-class-properties , вы также можете объявить defaultProps как статическое свойство в классе компонента React.',
		eng:
			'If you are using a Babel transform like transform-class-properties , you can also declare defaultProps as static property within a React component class.',
	},
	{
		rus:
			'Этот static property синтаксис хотя еще не завершен, и потребует шага компиляции для работы в браузере.',
		eng:
			'This static property syntax has not yet been finalized though and will require a compilation step to work within a browser.',
	},
	{
		rus:
			'DefaultProps будет использоваться для обеспечения того, что this.props.name будет иметь значение, если оно не было специфицировано родительским компонентом.',
		eng:
			'The defaultProps will be used to ensure that this.props.name will have a value if it was not specified by the parent component.',
	},
	{
		rus:
			'Проверка типов проптипов происходит после применения defaultProps, поэтому проверка типов также применяется к defaultProps.',
		eng:
			'The propTypes typechecking happens after defaultProps are resolved, so typechecking will also apply to the defaultProps.',
	},
	{
		rus:
			'Статические средства проверки типов, такие как Flow и TypeScript, индетифицируют определенные типы проблем еще до запуска кода.',
		eng:
			'Static type checkers like Flow and TypeScript identify certain types of problems before you even run your code.',
	},
	{
		rus:
			'Статические проверки типов также могут улучшить рабочий процесс разработчика, добавив такие функции, как автозавершение.',
		eng:
			'Static type checkers can also improve developer workflow by adding features like auto-completion.',
	},
	{
		rus:
			'По этой причине мы рекомендуем использовать Flow или TypeScript вместо PropTypes для больших баз кода.',
		eng:
			'For this reason, we recommend using Flow or TypeScript instead of PropTypes for larger code bases.',
	},
	{
		rus:
			'Flow позволяет аннотировать переменные, функции и компоненты с помощью специального синтаксиса типов, а также выявлять ошибки на ранних этапах.',
		eng:
			'Flow lets you annotate the variables, functions, and React components with a special type syntax, and catch mistakes early.',
	},
	{
		rus:
			'До сих пор мы создали приложение, которое корректно рендерится как функция от props и state, стекающих вниз по иерархии.',
		eng:
			"So far, we've built an app that renders correctly as a function of props and state flowing down the hierarchy.",
	},
	{
		rus:
			'Компоненты формы глубоко в иерархии должны обновлять state в другом компоненте.',
		eng:
			'The form components deep in the hierarchy need to update the state in the other component.',
	},
	{
		rus:
			'Теперь пришло время поддерживать поток данных следующих в другом направлении.',
		eng: "Now it's time to support data flowing the other way.",
	},
	{
		rus:
			'Но для этого требуется немного больше ввода, чем при традиционной двусторонней привязке данных.',
		eng:
			'But it does require a little more typing than traditional two-way data binding.',
	},
	{
		rus:
			'React делает этот поток данных явным, чтобы было легко понять, как работает ваша программа.',
		eng:
			'React makes this data flow explicit to make it easy to understand how your program works.',
	},
	{
		rus:
			'Мы хотим убедиться, что всякий раз, когда пользователь изменяет форму, мы обновляем состояние, чтобы отразить пользовательский ввод.',
		eng:
			'We want to make sure that whenever the user changes the form, we update the state to reflect the user input.',
	},
	{
		rus:
			'Поскольку компоненты должны обновлять только свое собственное состояние, FilterableProductTable передаст обратные вызовы в панель поиска, которая будет срабатывать всякий раз, когда состояние должно быть обновлено.',
		eng:
			'Since components should only update their own state, FilterableProductTable will pass callbacks to SearchBar that will fire whenever the state should be updated.',
	},
	{
		rus:
			'Хотя это звучит сложно, на самом деле это всего лишь несколько строк кода.',
		eng:
			"Though this sounds complex, it's really just a few lines of code.",
	},
	{
		rus:
			'И это действительно ясно, как ваши данные текут по всему приложению.',
		eng:
			"And it's really explicit how your data is flowing throughout the app.",
	},
	{
		rus:
			'Надеюсь, это даст вам представление о том, как строить компоненты и приложения с помощью React.',
		eng:
			'Hopefully, this gives you an idea of how to think about building components and applications with React.',
	},
	{
		rus:
			'Хотя это может быть немного больше печатания, чем вы привыкли.',
		eng: "While it may be a little more typing than you're used to",
	},
	{
		rus:
			'Помните, что код читается гораздо больше раз, чем пишется, и очень легко читать этот модульный, явный код.',
		eng:
			"Remember that code is read far more than it's written, and it's extremely easy to read this modular, explicit code.",
	},
	{
		rus:
			'Когда вы начнете создавать большие библиотеки компонентов, вы оцените эту эксплицитность и модульность.',
		eng:
			"As you start to build large libraries of components, you'll appreciate this explicitness and modularity.",
	},
	{
		rus:
			'И при переиспользовании кода ваши строки кода начнут сжиматься.',
		eng:
			'And with code reuse, your lines of code will start to shrink.',
	},
	{
		rus:
			'ОК, мы определили, что такое минимальный набор состояния приложения.',
		eng:
			"OK, so we've identified what the minimal set of app state is.",
	},
	{
		rus:
			'Далее нам нужно определить, какой компонент мутирует или владеет этим состоянием.',
		eng:
			'Next, we need to identify which component mutates, or owns, this state.',
	},
	{
		rus:
			'Запомните: React это односторонний поток данных по иерархии компонентов.',
		eng:
			'Remember: React is all about one-way data flow down the component hierarchy.',
	},
	{
		rus:
			'Может быть, не сразу ясно, какой компонент должен владеть каким состоянием.',
		eng:
			'It may not be immediately clear which component should own what state.',
	},
];

export default {
	dictionary1,
	oldDictionary1,
	dictionary10,
	dictionary2,
	dictionary20,
	oldDictionary2,
};
