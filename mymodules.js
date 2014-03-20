

exports.sayHello = function(counties){
    console.log('Hello from mymodules!');
    //console.log(counties[0]);
    console.log(
        exports.getCountyInfo('delhi', counties)
    );
};

exports.getCountyInfo = function(name, counties){

    name = name.toLowerCase();

    for (var i = 0; i < counties.length; i++) {
        if (    counties[i].county_name &&
                (
                    name === counties[i].county_name.toLowerCase() ||
                    name === counties[i].county_name.toLowerCase().replace(' ','')
                )
            ) {

            console.log(name.replace(' ', ''));
            return counties[i];
        }
    }

    return null;
    /*
    if (!exports.county_names) {
        exports.county_names = Array.map(function(elem){
            return elem.county_name.toLowerCase();
        });
    }

    console.log(exports.county_names.indexOf(name));*/

};