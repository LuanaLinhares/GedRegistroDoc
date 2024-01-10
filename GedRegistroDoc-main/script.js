function getClassification() {
    var classificationCode = document.getElementById("classificationCode").value;
    var classification;

    switch (classificationCode) {
        case "147":
            classification = "Ofício";
            break;
        case "236":
            classification = "Processo";
            break;
        case "369":
            classification = "Memorando";
            break;
        case "482":
            classification = "Portaria";
            break;
        default:
            classification = "";
            break;
    }

    document.getElementById("classification").value = classification;
}
