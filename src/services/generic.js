export const transDate = (en_month,lang) => {
    var months = {};
     if (lang==="ar"){
        months = {"January" : "يناير", "February" : "فبراير", "March" : "مارس", "April" : "أبريل", "May" : "مايو", "June" : "يونيو", "July" : "يوليو", "August" : "أغسطس", "September" : "سبتمبر", "October" : "أكتوبر", "November" : "نوفمبر", "December" : "ديسمبر"};
    }else if(lang==="tr_TR"){
        months = {"January" : "Ocak", "February" : "Şubat", "March" : "Mart", "April" : "Nisan", "May" : "Mayıs", "June" : "Haziran", "July" : "Temmuz", "August" : "Ağustos", "September" : "Eylül", "October" : "Ekim", "November" : "Kasım", "December" : "Aralık"};
    }else{ 
        months = {"January" : "January", "February" : "February", "March" : "March", "April" : "April", "May" : "May", "June" : "June", "July" : "July", "August" : "August", "September" : "September", "October" : "October", "November" : "November", "December" : "December"};
    }

    return months[en_month];

}



// function transDate($en_month) {
//     if(ICL_LANGUAGE_CODE == "en") {
//         $months = array("Jan" : "January", "Feb" : "February", "Mar" => "March", "Apr" => "April", "May" => "May", "Jun" => "June", "Jul" => "July", "Aug" => "August", "Sep" => "September", "Oct" => "October", "Nov" => "November", "Dec" => "December");
//     }elseif(ICL_LANGUAGE_CODE == "ar") {
//         $months = array("Jan" => "يناير", "Feb" => "فبراير", "Mar" => "مارس", "Apr" => "أبريل", "May" => "مايو", "Jun" => "يونيو", "Jul" => "يوليو", "Aug" => "أغسطس", "Sep" => "سبتمبر", "Oct" => "أكتوبر", "Nov" => "نوفمبر", "Dec" => "ديسمبر");
//     }
//     elseif (ICL_LANGUAGE_CODE=="tr")
//     {
//         $months = array("Jan" => "Ocak", "Feb" => "Şubat", "Mar" => "Mart", "Apr" => "Nisan", "May" => "Mayıs", "Jun" => "Haziran", "Jul" => "Temmuz", "Aug" => "Ağustos", "Sep" => "Eylül", "Oct" => "Ekim", "Nov" => "Kasım", "Dec" => "Aralık");
//     }
     
//     return $months[$en_month];
// }