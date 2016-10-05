'use strict';
LiveOdiaApp.controller('indexController', ['$scope', '$rootScope', '$location', 'homeServiceFactory', 'loginServiceFactory', function ($scope, $rootScope, $location, homeServiceFactory, loginServiceFactory) {
    debugger;
    $scope.viewActive = $rootScope.hideit;
    //logout 
    $scope.logOut = function () {
        loginServiceFactory.logOut();
        $location.path('/home');
    };
    //$scope.ActiveView = function (path) {
    //    debugger;
    //    if (path === "/home") {
    //        $scope.viewActive = true;
    //    }
    //    return $scope.viewActive;
    //};
    //$scope.fullnews = [];
    //$scope.hotNews = [];
    //$scope.topstories=[];
    //$scope.newsories=[];
    //$scope.getAllNews = function () {
    //    homeServiceFactory.getAllNews().then(function (newsData) {
    //        debugger;
    //        if (newsData) {
    //            $scope.fullnews = newsData.fullnews;
    //            angular.forEach($scope.fullnews, function (value, key) {
    //                if (value.HotNews)
    //                    $scope.hotNews.push({ "title": value.HotNews.TITLE, "newsid": value.HotNews.HID });
    //                if (value.TopNews)
    //                    $scope.topstories.push({ "title": value.TopNews.TITLE, "topnews": value.TopNews.TopNews, "tnewsid": value.fnews.FnId });
    //                if (value.NewStory)
    //                    $scope.newsories.push({ "title": value.NewStory.TITLE });
    //            });
    //        }
    //    });
    //};

    //$scope.getAllNews();

    //$scope.getHotFullNews = function (hnid) {
    //    debugger;
    //    homeServiceFactory.getHotFullNews(hnid).then(function (hnewsdata) {
    //        if (hnewsdata) {
    //            debugger;
    //            $scope.hnewsDetail = hnewsdata;
    //        };
    //    })
    //};
    //$scope.topstories = [
    //    {
    //        newsid: '01',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '02',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '03',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '04',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '05',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    },
    //    {
    //        newsid: '06',
    //        title: 'ପୁଣି ତିନି ଚାଷୀଙ୍କ ଆତ୍ମହତ୍ୟା ଅଭିଯୋଗ',
    //        topnews: 'ବଲାଙ୍ଗିର/କେନ୍ଦୁଝର: ଆଜି ପୁଣି ତିନି ଜଣ ଚାଷୀ ଆତ୍ମହତ୍ୟା କରିଥିବା ଅଭିଯୋଗ ହୋଇଛି। ପ୍ରାଣ ହରାଇଥିବା ୩ ଚାଷୀଙ୍କ ମଧ୍ୟରୁ ଦୁଇ ଜଣ ବଲାଙ୍ଗିରର ଓ ଜଣେ କେନ୍ଦୁଝରର। ବଲାଙ୍ଗିରରେ ଆତ୍ମହତ୍ୟା କରିଥିବା ଦୁଇ ଜଣ ଚାଷୀ ହେଲେ ପରିକ୍ଷିତ ନାଗ ଓ କୃତିବାସ ଗହିର।'
    //    }
    //];
    //$scope.newsories = [
    //    {
    //        title: 'ଦେଶ ବିଦେଶ',
    //        newstory: 'ରିଆଦ ୨୫ା୧୦: ଆମେରିକାର ବିଦେଶ ମନ୍ତ୍ରୀ ଜନ୍ କେରୀ ସାଉଦି ଆରବର ଶାହା ସଲମାନଙ୍କ ସହ ଆଲୋଚନା କରିବା ପାଇଁ ରିଆଦ ପହଞ୍ଚଛନ୍ତି । ୪ବର୍ଷ ଧରି ସିରିଆରେ ଚାଲିଥିବା ଗୃହ ଯୁଦ୍ଧ ପ୍ରସଙ୍ଗରେ ଦୁଇ ନେତାଙ୍କ ମଧ୍ୟରେ ମୁଖ୍ୟତଃ ଆଲୋଚନା ହେବ । କେରି ରବିବାର ଓମାନରୁ ରିଆଦ ପହଞ୍ଚôଛନ୍ତି । ଜୋର୍ଡାନର ଶାହା ଅବଦୁଲ୍ଲା ଦ୍ୱିତୀୟ ଓ ପାଲେଷ୍ଟାଇନ୍ ରାଷ୍ଟ୍ରପତି ମହମ୍ମଦ ଅବାସଙ୍କ ସହ ପାଲେଷ୍ଟାଇନ୍-ଇସ୍ରାଏଲ ଉତ୍ତେଜନା ପ୍ରସଙ୍ଗରେ ଭିନ୍ନ ଭିନ୍ନ ଭାବେ ଆଲୋଚନା କରିଥିଲେ । ଶାହାଙ୍କ ବାସଭବନ ଧୀରାୟା ଫାର୍ମକୁ ଯିବା ପୂର୍ବରୁ ସେ ସାଉଦି ଆରବର ବିଦେଶ ମନ୍ତ୍ରୀ ଅଦେଲ ଅଲ ଜୁବୀରଙ୍କ ସହ ଆଲୋଚନା କରିଥିଲେ । ଆମେରିକୀୟ କୂଟନୀତିଜ୍ଞଙ୍କ କହିବାନୁସାରେ କେରି ଓ ସାଉଦି ଆରବର ଶାହାଙ୍କ ମଧ୍ୟରେ ସନ୍ଧ୍ୟାରେ ହେବାକୁ ଥିବା ଆେଲୋଚନାର ମୁଖ୍ୟ ପ୍ରସଙ୍ଗ ସିରିଆ ଯୁଦ୍ଧ ରହିବ । ୱାଶିଂଟନ୍ ଓ ରିଆଦ ଆମେରିକା ନେତୃତ୍ୱାଧୀନ ଉକ୍ତ ମେଣ୍ଟର ଅଂଶବିଶେଷ, ଯେଉଁମାନେ ଗତବର୍ଷ ଜିହାଦୀ ଗୋଷ୍ଠୀ ଆଇଏସ୍ଆଇଏସ୍କୁ ଟାର୍ଗେଟ୍ କରିବା ପାଇଁ ବାୟୁସେନା ଅଭିଯାନ ଆରମ୍ଭ କରିଥିଲେ ।'
    //    }
    //];
    //$scope.hotNews = [
    // {
    //     hnid: '01',
    //     title: 'ମୂଖ୍ୟ ଖବର',
    //     copy: 'Tart candy canes gummi bears. Candy canes ice cream cheesecake tart pie powder sweet.'
    // },
    // {
    //     hnid: '02',
    //     title: 'ଓଡ଼ିଶା ଖବର',
    //     copy: 'Toffee jelly gummies donut cake. Fruitcake soufflé jelly cotton candy.'
    // },
    // {
    //     hnid: '03',
    //     title: 'ଦେଶ ବିଦେଶ',
    //     copy: 'Croissant cheesecake jujubes cupcake pudding apple pie cheesecake muffin.'
    // },
    // {
    //     hnid: '04',
    //     title: 'ଫଟୋ',
    //     copy: 'jelly beans croissant topping bear claw ice cream tootsie roll snaps.'
    // }];
    //$scope.hnewsDetail = [
    //    {
    //        hnid: '01',
    //        htitle: '',
    //        hnews: ''
    //    }
    //]

    $scope.authentication = loginServiceFactory.authentication;

}]);