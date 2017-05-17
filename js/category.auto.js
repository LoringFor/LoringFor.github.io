var defaultPageSize = 5;
var arr = eval('[{"title":"初入linux世界","date":"2017-05-11 00:39:19","desc":"我只是一个刚刚学习linux的新手，把自己的学习经历以博客的形式记录下来"},\
{"title":"编译机制","date":"2017-05-12 00:49:59","desc":"以自身学习经历来谈谈linux下源程序的编译过程"},\
{"title":"make的使用","date":"2017-05-13 00:15:55","desc":"linux下，make是一个非常重要的工具"},\
{"title":"git的学习","date":"2017-05-14 00:10:09","desc":"每一个程序员都必须熟练使用git"},\
{"title":"Qt模块简介","date":"2017-05-14 00:39:52","desc":"对Qt5的模块进行一个简单的介绍，便于以后的需要去快速查找"},\
{"title":"moc的作用","date":"2017-05-15 17:14:35","desc":"对于qt编译的一个补充，了解一下moc的作用"},\
{"title":"元对象","date":"2017-05-15 20:12:20","desc":"对于元对象（QMetaObject）的一个深入学习，剖析moc生成的文件"},\
{"title":"QObject类详解","date":"2017-05-15 23:46:41","desc":"详细了解Qt中的基类QObject"},\
{"title":"QObject宏","date":"2017-05-16 09:46:41","desc":"详细了解Qt中的基类QObject中的宏定义"},\
{"title":"进程的学习","date":"2017-05-16 20:00:59","desc":"对于进程的简单了解与学习"},\
{"title":"进程间的通信","date":"2017-05-17 21:10:59","desc":"简单介绍了下进程间通信的几种机制"},\
{"title":"线程的学习","date":"2017-05-17 23:59:11","desc":"对于线程的简单了解与学习"}\
			   ]')

function get(currentPage) {
	return getResult(currentPage, defaultPageSize);
}

function getResult(currentPage, pageSize) {
	currentPage = parseInt(currentPage);
	pageSize = parseInt(pageSize);
	var startIndex = (currentPage - 1) * pageSize;
	var endIndex = startIndex + pageSize;
	if (arr.length <= startIndex) { return null;}
	if (endIndex > arr.length) { endIndex = arr.length;}
	return arr.slice(startIndex, endIndex);
}

function pageCount() {
	return getPageCount(defaultPageSize);
}

function getPageCount(pageSize) {
	return Math.ceil(arr.length / pageSize);
}

function getQueryString(query) {
	var uri = window.location.search;
    var re = new RegExp("" +query+ "=([^&?]*)", "ig");
    return ((uri.match(re))?(uri.match(re)[0].substr(query.length+1)):null);
}