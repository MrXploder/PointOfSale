(function(){
  angular
  .module('angularApp')
  .filter('dateRange', dateRange);

  function dateRange(){
    return function(items, fromDate, toDate){
      var filtered = [];
      if(!fromDate){ fromDate = moment().format("DD-MM-YYYY"); }
      if(!toDate){ toDate = fromDate; }
      var from_date = moment(fromDate, "DD-MM-YYYY");
      var to_date = moment(toDate, "DD-MM-YYYY");
      var now_date = null;
      angular.forEach(items, function(item){
        now_date = moment(item.date, "DD-MM-YYYY");
        if(from_date <= now_date && now_date <= to_date){ 
          filtered.push(item); 
        }
      });
      return filtered;
    }
  }
})();
