//评教页面前面的内容
labeliddd =document.getElementsByClassName("webix_inp_label");
nameofbookid = labeliddd[3].htmlFor;
document.getElementById(nameofbookid).value="2021年版的《中国马克思主义与当代》";
classlanguageid = labeliddd[4].htmlFor;
document.getElementById(classlanguageid).value="中文";
tmpselction =document.getElementsByClassName("webix_inp_radio_border webix_radio_0");
bookconditionid = tmpselction[3].firstElementChild.id;
document.getElementById(id=bookconditionid).click();
courseLangid = tmpselction[5].firstElementChild.id;
document.getElementById(id=courseLangid).click();
majorindexid = tmpselction[6].firstElementChild.id;
document.getElementById(id=majorindexid).click();
//评价分数
mark1 = tmpselction[7].firstElementChild.id;//优秀
document.getElementById(id=mark1).click();
mark2 = tmpselction[10].firstElementChild.id;//优秀
document.getElementById(id=mark2).click();
mark3 = tmpselction[14].firstElementChild.id;//良好
document.getElementById(id=mark3).click();
mark4 = tmpselction[16].firstElementChild.id;//优秀
document.getElementById(id=mark4).click();
yesofnot = tmpselction[19].firstElementChild.id;//优秀
document.getElementById(id=yesofnot).click();
//填写文字评价
box = document.getElementsByClassName("webix_el_box");
box1id = box[11].firstElementChild.id;
box2id = box[12].firstElementChild.id;
box3id = box[13].firstElementChild.id;
box4id = box[15].firstElementChild.id;
sumbitid = box[16].firstElementChild.id;   //提交按钮 慎用！！！
document.getElementById(box1id).value='老师上课富有激情，语言风趣幽默，具有启发性';
document.getElementById(box2id).value='没有';
document.getElementById(box3id).value='没有';
document.getElementById(box4id).value='课程形式很好，内容丰富，紧跟时事';

//试验按钮，不建议用
document.getElementById(box4id).click(); //自动保存并提交，危险性比较大，不建议加到脚本里面，别这么

