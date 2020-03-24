$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/features/openn.feature");
formatter.feature({
  "line": 2,
  "name": "Opencart website",
  "description": "",
  "id": "opencart-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"\u003cemailid\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "opencart-website;regandlog;",
  "rows": [
    {
      "cells": [
        "emailid",
        "pass"
      ],
      "line": 14,
      "id": "opencart-website;regandlog;;1"
    },
    {
      "cells": [
        "soundaryariya27@gmail.com",
        "sound"
      ],
      "line": 15,
      "id": "opencart-website;regandlog;;2"
    },
    {
      "cells": [
        "lakshmikiruba80@gmail.com",
        "kirubakar"
      ],
      "line": 16,
      "id": "opencart-website;regandlog;;3"
    },
    {
      "cells": [
        "elakkiyamsp@gmail.com",
        "elakkiya"
      ],
      "line": 17,
      "id": "opencart-website;regandlog;;4"
    },
    {
      "cells": [
        "sound",
        "sound11"
      ],
      "line": 18,
      "id": "opencart-website;regandlog;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"soundaryariya27@gmail.com\" and \"sound\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 42654676455,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 2295661820,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 5846496312,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1741785913,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soundaryariya27@gmail.com",
      "offset": 17
    },
    {
      "val": "sound",
      "offset": 49
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 8730204370,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 80734380,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"lakshmikiruba80@gmail.com\" and \"kirubakar\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 21329284280,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 13362603542,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 26009401391,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 2188518666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lakshmikiruba80@gmail.com",
      "offset": 17
    },
    {
      "val": "kirubakar",
      "offset": 49
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7735356841,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 67650819,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"elakkiyamsp@gmail.com\" and \"elakkiya\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 98799544109,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 4364273206,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 8097707403,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 1695552247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "elakkiyamsp@gmail.com",
      "offset": 17
    },
    {
      "val": "elakkiya",
      "offset": 45
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7146415359,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 2077916870,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "RegAndLog",
  "description": "",
  "id": "opencart-website;regandlog;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@tc01"
    },
    {
      "line": 1,
      "name": "@opencart_Feature"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "the user launch the browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the  user opens opencart register page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the user enters the valid register details",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "the  user opens opencart login page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "The user enters \"sound\" and \"sound11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "the user close the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "RegAndLogSteps.the_user_launch_the_browser_for_valid_register()"
});
formatter.result({
  "duration": 27320753591,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_register_page()"
});
formatter.result({
  "duration": 9458859524,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_enters_the_valid_register_details()"
});
formatter.result({
  "duration": 5663805987,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_opens_opencart_login_page()"
});
formatter.result({
  "duration": 5138732339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sound",
      "offset": 17
    },
    {
      "val": "sound11",
      "offset": 29
    }
  ],
  "location": "RegAndLogSteps.the_user_enters_the_valid_login_details(String,String)"
});
formatter.result({
  "duration": 7349435025,
  "status": "passed"
});
formatter.match({
  "location": "RegAndLogSteps.the_user_close_the_login_page()"
});
formatter.result({
  "duration": 69488506,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "Wishlist",
  "id": "opencart-website;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc02"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "the user logged in",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "add items to wishlist",
  "keyword": "When "
});
formatter.match({
  "location": "WishlistSteps.logedin()"
});
formatter.result({
  "duration": 93815575067,
  "status": "passed"
});
formatter.match({
  "location": "WishlistSteps.wishes()"
});
formatter.result({
  "duration": 8913377244,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Comparison",
  "description": "",
  "id": "opencart-website;comparison",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@tc03"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "open the site",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "compare price of 2 products",
  "keyword": "When "
});
formatter.match({
  "location": "CompareSteps.log()"
});
formatter.result({
  "duration": 63127214229,
  "status": "passed"
});
formatter.match({
  "location": "CompareSteps.comparison()"
});
formatter.result({
  "duration": 79270498,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Specials",
  "description": "",
  "id": "opencart-website;specials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 32,
      "name": "@tc04"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "click specials",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "display special offers",
  "keyword": "When "
});
formatter.match({
  "location": "SpecialSteps.logedin()"
});
