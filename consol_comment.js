/*
//参数说明
nameofbookid - 教材名称，默认我是一本书
classlanguageid - 教材使用语言，默认中文
bookconditionid - 教材情况，默认有教材和讲义
courseLangid - 授课语言，默认中文
majorindexid - 选秀情况，默认学位课
box1id - 总体印象，默认我最爱的老师
box2id - 教师参考，默认课程非常好，没有意见
box3id - 教学资源，默认课程非常好，没有意见
box4id - 教学内容改革，默认课程非常好，没有意见
*/

/*
    存在一个问题，就是选择完教材使用情况之后，ID会增加1。因为我已经保存过了
    已经不能再测试了T_T，总的来说，可以根据[*]里面的数字适当的增减1，就可以实现选项的前后偏移了
    所以我修改了一下排序，先填写内容，然后是评分，然后是教材名称及语言，最后是教材使用情况
*/

//填写BOX
box = document.getElementsByClassName("webix_el_box");
box1id = box[11].firstElementChild.id;
box2id = box[12].firstElementChild.id;
box3id = box[13].firstElementChild.id;
box4id = box[15].firstElementChild.id;
sumbitid = box[16].firstElementChild.id;   //提交按钮 慎用！！！
document.getElementById(box1id).value='我最爱的老师';
document.getElementById(box2id).value='课程非常好，没有意见';
document.getElementById(box3id).value='课程非常好，没有意见';
document.getElementById(box4id).value='课程非常好，没有意见';
//评价分数
mark1 = tmpselction[7].firstElementChild.id;//优秀
document.getElementById(id=mark1).click();
mark2 = tmpselction[10].firstElementChild.id;//优秀
document.getElementById(id=mark2).click();
mark3 = tmpselction[14].firstElementChild.id;//良好
document.getElementById(id=mark3).click();
mark4 = tmpselction[16].firstElementChild.id;//优秀
document.getElementById(id=mark4).click();
yesofnot = tmpselction[19].firstElementChild.id;//是
document.getElementById(id=yesofnot).click();

//教材名称和教材使用语言
labeliddd =document.getElementsByClassName("webix_inp_label");
nameofbookid = labeliddd[3].htmlFor;
document.getElementById(nameofbookid).value="我是一本书";
classlanguageid = labeliddd[4].htmlFor;
document.getElementById(classlanguageid).value="我是语言";

//教材使用情况
tmpselction =document.getElementsByClassName("webix_inp_radio_border webix_radio_0");
bookconditionid = tmpselction[3].firstElementChild.id;
document.getElementById(id=bookconditionid).click();
courseLangid = tmpselction[5].firstElementChild.id;
document.getElementById(id=courseLangid).click();
majorindexid = tmpselction[6].firstElementChild.id;
document.getElementById(id=majorindexid).click();
