dataSetVersion = "2018-06-28"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Character Role",
    key: "role",
    tooltip: "Check this to restrict to certain character roles.",
    checked: true,
    sub: [
      { name: "Playable", key: "playable" },
      { name: "Non-Playable", key: "nonplayable" },
      { name: "Antagonist", key: "antagonist" },
    ]
  },
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to series.",
    checked: true,
    sub: [
      { name: "Xenoblade Chronicles", key: "XC" },
      { name: "Xenoblade Chronicles X", key: "XCX" },
      { name: "Xenoblade Chronicles 2", key: "XC2" }
    ]
  },
  {
    name: "Filter Spoilers",
    key: "spoiler",
    tooltip: "Check this to restrict spoilers."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Cross M",
    img: "XCX-Cross M.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Cross F",
    img: "XCX-Cross F.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Elma",
    img: "XCX-Elma.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Lin",
    img: "XCX-Lin.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Gwin",
    img: "XCX-Gwin.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Irina",
    img: "XCX-Irina.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Doug",
    img: "XCX-Doug.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Lao",
    img: "XCX-Lao.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XCX"]
    }
  },
  {
    name: "L",
    img: "XCX-L.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Nagi",
    img: "XCX-Nagi.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Celica",
    img: "XCX-Celica.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Hope",
    img: "XCX-Hope.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Frye",
    img: "XCX-Frye.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Phog",
    img: "XCX-Phog.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Mia",
    img: "XCX-Mia.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Murderess",
    img: "XCX-Murderess.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Alexa",
    img: "XCX-Alexa.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "H.B.",
    img: "XCX-H.B..png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Bozé",
    img: "XCX-Bozé.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Yelv",
    img: "XCX-Yelv.png",
    opts: {
      role: ["playable"],
      series: ["XCX"]
    }
  },
  {
    name: "Vandham (XCX)",
    img: "XCX-Vandham.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Maurice",
    img: "XCX-Maurice.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Tatsu",
    img: "XCX-Tatsu.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Eleonora",
    img: "XCX-Eleonora.png",
    opts: {
      role: ["nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Jiarg",
    img: "XCX-Ga Jiarg.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ga Buidhe",
    img: "XCX-Ga Buidhe.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Luxaar",
    img: "XCX-Luxaar.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Goetia",
    img: "XCX-Goetia.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Ryyz",
    img: "XCX-Ryyz.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Dagahn",
    img: "XCX-Dagahn.png",
    opts: {
      role: ["antagonist", "nonplayable"],
      series: ["XCX"]
    }
  },
  {
    name: "Rex",
    img: "XC2-Rex.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Nia",
    img: "XC2-Nia.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Tora",
    img: "XC2-Tora.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Vandham (XC2)",
    img: "XC2-Vandham.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Mòrag",
    img: "XC2-Mòrag.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Zeke",
    img: "XC2-Zeke.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Pyra",
    img: "XC2-Pyra.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Mythra",
    img: "XC2-Mythra.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Pneuma",
    img: "XC2-Pneuma.png",
    opts: {
      role: ["playable"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Roc",
    img: "XC2-Roc.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Blade Nia",
    img: "XC2-Blade Nia.png",
    opts: {
      role: ["playable"],
      series: ["XC2"],
      spoiler: true
    }
  },
  {
    name: "Dromarch",
    img: "XC2-Dromarch.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi",
    img: "XC2-Poppi.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QT",
    img: "XC2-Poppi QT.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppi QTpi",
    img: "XC2-Poppi QTpi.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Brighid",
    img: "XC2-Brighid.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Aegaeon",
    img: "XC2-Aegaeon.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Pandoria",
    img: "XC2-Pandoria.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Adenine",
    img: "XC2-Adenine.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Agate",
    img: "XC2-Agate.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Azami",
    img: "XC2-Azami.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Boreas",
    img: "XC2-Boreas.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Dagas",
    img: "XC2-Dagas.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Dahlia",
    img: "XC2-Dahlia.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Electra",
    img: "XC2-Electra.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Finch",
    img: "XC2-Finch.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Floren",
    img: "XC2-Floren.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Godfrey",
    img: "XC2-Godfrey.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Gorg",
    img: "XC2-Gorg.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Herald",
    img: "XC2-Herald.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Kasandra",
    img: "XC2-Kasandra.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Kora",
    img: "XC2-Kora.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "KOS-MOS",
    img: "XC2-KOS-MOS.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Newt",
    img: "XC2-Newt.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Nim",
    img: "XC2-Nim.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Perceval",
    img: "XC2-Perceval.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Perun",
    img: "XC2-Perun.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Praxis",
    img: "XC2-Praxis.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Sheba",
    img: "XC2-Sheba.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Theory",
    img: "XC2-Theory.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Ursula",
    img: "XC2-Ursula.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Vale",
    img: "XC2-Vale.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Vess",
    img: "XC2-Vess.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Wulfric",
    img: "XC2-Wulfric.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Zenobia",
    img: "XC2-Zenobia.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Poppibuster",
    img: "XC2-Poppibuster.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "T-elos",
    img: "XC2-T-elos.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Shulk (XC2)",
    img: "XC2-Shulk.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Fiora (XC2)",
    img: "XC2-Fiora.png",
    opts: {
      role: ["playable"],
      series: ["XC2"]
    }
  },
  {
    name: "Akhos",
    img: "XC2-Akhos.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Cressidus",
    img: "XC2-Cressidus.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Mikhail",
    img: "XC2-Mikhail.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Obrona",
    img: "XC2-Obrona.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Patroka",
    img: "XC2-Patroka.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Perdido",
    img: "XC2-Perdido.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Sever",
    img: "XC2-Sever.png",
    opts: {
      role: ["playable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Jin",
    img: "XC2-Jin.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Malos",
    img: "XC2-Malos.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC2"]
    }
  },
  {
    name: "Shulk",
    img: "XC-Shulk.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Fiora",
    img: "XC-Fiora.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Mecha Fiora",
    img: "XC-Mecha Fiora.png",
    opts: {
      role: ["playable"],
      series: ["XC"],
      spoiler: true
    }
  },
  {
    name: "Reyn",
    img: "XC-Reyn.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Dunban",
    img: "XC-Dunban.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Sharla",
    img: "XC-Sharla.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Riki",
    img: "XC-Riki.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Melia",
    img: "XC-Melia.png",
    opts: {
      role: ["playable"],
      series: ["XC"]
    }
  },
  {
    name: "Dickson",
    img: "XC-Dickson.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Mumkhar",
    img: "XC-Mumkhar.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Alvis",
    img: "XC-Alvis.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Juju",
    img: "XC-Juju.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Otharon",
    img: "XC-Otharon.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Vanea",
    img: "XC-Vanea.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Gadolt",
    img: "XC-Gadolt.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Egil",
    img: "XC-Egil.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Linada",
    img: "XC-Linada.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Lorithia",
    img: "XC-Lorithia.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Meyneth",
    img: "XC-Meyneth.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Tyrea",
    img: "XC-Tyrea.png",
    opts: {
      role: ["nonplayable", "antagonist"],
      series: ["XC"]
    }
  },
  {
    name: "Kallian",
    img: "XC-Kallian.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  },
  {
    name: "Sorean",
    img: "XC-Sorean.png",
    opts: {
      role: ["nonplayable"],
      series: ["XC"]
    }
  }
];
