                    <select class="form-control chosen_group" data-bind="options: model.OrgBranchs, optionsText: 'Name', optionsValue: 'Id', value: model.valueSelect.CreateBranchId"></select>


var i = 0;
var DKDung = 100;
var arrObj =[];
for (i = 0; i < DKDung; i++) {
    var idPDG = '050';
    var z = Math.floor(idPDG);
    var idPDG1 = z + i;
    var abc = idPDG1 + 1;
    var DVXV = self.BankingTransactionOffice().find(({ Id }) => Id == idPDG);
    var ValueDVXV = DVXV.Name;
    var Dstart = ValueDVXV.search('' + idPDG1 + '');
    var Dend = ValueDVXV.search('' + abc + '');
    var End = ValueDVXV.length;


    if (Dend == -1) {
        var PGD = ValueDVXV.substring(Dstart +4, End)
        var DKDung = i;
    } else {
        var PGD = ValueDVXV.substring(Dstart +4, Dend - 3)
    }
    var _data = ko.mapping.fromJS(self.init_Array_Table());
    var obj = {
        ID: idPDG1,
        NAME: PGD,
        F1_19: "",
        F1_16: "",
        DateStart: "",
        DateEnd: "",
        ChuKiCanBo: "",
        ChuKiLanhDao: "",
        Array_ChiTiet_BCNCV: self.init_Array_Table(),
        Array_TongTien: []
    }
    arrObj.push(obj);
    //self.Array_DVXV().push(_obj);
}
var _arrObj = ko.mapping.fromJS(arrObj);

self.Array_DVXV.push.apply(self.Array_DVXV, _arrObj());


var arrObj = [];
var CN = self.BankingTransactionOffice().find(({ Id }) => Id == self.CreateBranchCode());
if (CN) {
    console.log(CN);
    var lsPGD = CN.Name.split('|');
    lsPGD.forEach((item) => {
        var End = item.length;
        var PGD = item.substring(6, End)
        var IDPGD = item.substring(0, 6)
        var _data = ko.mapping.fromJS(self.init_Array_Table());
        var obj = {
            ID: IDPGD,
            NAME: PGD,
            F1_19: "",
            F1_16: "",
            DateStart: "",
            DateEnd: "",
            ChuKiCanBo: "",
            ChuKiLanhDao: "",
            Array_ChiTiet_BCNCV: self.init_Array_Table(),
            Array_TongTien: []
        }
        arrObj.push(obj);
        //self.Array_DVXV().push(_obj);
    })
}

var _arrObj = ko.mapping.fromJS(arrObj);

self.Array_DVXV.push.apply(self.Array_DVXV, _arrObj());