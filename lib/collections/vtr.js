
Vtr = new Mongo.Collection('vtr');

Schemas.Vtr = new SimpleSchema({
  whoDidReport: {  
    type: String,
    label: "Ilmoituksen tekijä",
    allowedValues: ['Hyppääjä', 'Vastaava kouluttaja', 'Koulutuspäällikkö', 'Turvallisuuspäällikkö','Muu henkilö'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse ilmoituksen tekijä)"
      }
    }
  }, 
  skydiverDz: {
        label: "Hyppääjän kerho",
        type: SimpleSchema.RegEx.Id,
        optional: true,
        autoform: {
            firstOption: "(Valitse yhteisö)",
            options: function() {
              return _.map(Dropzones.find().fetch(),function (value){
                return {
                    label: value.name, value: value._id};
              })
            }
        }
    },
  happenedDz: {
        label: "Hyppypaikan yhteisö",
        type: SimpleSchema.RegEx.Id,
        optional: true,
        autoform: {
            firstOption: "(Valitse yhteisö)",
            options: function() {
              return _.map(Dropzones.find().fetch(),function (value){
                return {
                    label: value.name, value: value._id};
              })
            }
        }
    },
  location: {  
    type: String,
    label: "Hyppypaikka",
    max: 50
  },
  date: {  
    type: Date,
    label: "Päivämäärä"
  },
  name: {  
    type: String,
    label: "Hyppääjän nimi",
    max: 50
  },
  age: {  
    type: Number,
    label: "Hyppääjän ikä",
    min: 15,
    max: 150
  },
  exitWeight: {  
    type: Number,
    label: "Exit-paino (kg)",
    min: 10,
    max: 200
  },
  license: {  
    type: String,
    label: "Lisenssi",
    allowedValues: ['ALK', 'PK', 'JK', 'A','B','C','D'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse lisenssi/koulutusluokka)"
      }
    }
  },
  certifications: {
    type: String,
    label: "Kelpoisuudet (HM/THM/NHM)",
    max: 50
  },
  typeOfJump: {
    type: String,
    label: "Hypyn laatu",
    allowedValues: ['PL','IA','NOVA','TANDEM','Kerhohyppy','Harjoitus kilpailua varten','Kilpailu','Näytös'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse hypyn laatu)"
      }
    }
  },
  numberOfJumps: {
    type: Number,
    label: "Kokonaishyppymäärä"
  },
  numberOfJumpsinThreeMonths: {
    type: Number,
    label: "Hyppymäärä viimeisen 3kk aikana"
  },
  mainCanopy: {
    type: String,
    label: "Päävarjon merkki/malli"
  },
  mainCanopySize: {
    type: Number,
    label: "Päävarjon koko (sqft)",
    min: 35,
    max: 500
  },
  mainCanopyJumpsApprox: {
    type: Number,
    label: "Arvio kuvun hyppymäärästä"
  },
  jumpsWithCanopy: {
    type: String,
    label: "Hyppykokemus ko. tyyppisellä kuvulla",
    allowedValues: ['1-10','10-50','Yli 50'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse hyppykokemus)"
      }
    }
  },
  rig: {
    type: String,
    label: "Valjaiden/repun merkki/malli"
  },
  jumpsWithRig: {
    type: String,
    label: "Hyppykokemus ko. valjailla",
    allowedValues: ['1-10','10-50','Yli 50'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse hyppykokemus)"
      }
    }
  },
  openingSystem: {
    type: String,
    label: "Aukaisujärjestelmän sijainti",
    allowedValues: ['IA/Repun pohjassa', 'IA/Vatsahihnassa','IA/Reisihihnassa','PL/Apuvarjo','PL/Suora sisäpussi','PL/JAD'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse avausjärjestelmä)"
      }
    }
  }, 
  pilotChuteType: {
    type: String,
    label: "Apuvarjon tyyppi",
    allowedValues: ['Tukahtuva HD', 'Tukahtumaton HD','Jousi','POP','Kuminauha'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse apuvarjon tyyppi)"
      }
    }
  }, 
  reserveWasUsed: {
    type: Boolean,
    label: "Varavarjoa käytettiin",
    optional: true
  }, 
  reserveCanopy: {
    type: String,
    label: "Varavarjon merkki/malli",
    optional: true
  },
  reserveCanopySize: {
    type: String,
    label: "Varavarjon koko (sqft)",
    optional: true
  },
  reserveCanopyYear: {
    type: Number,
    label: "Arvio kuvun hyppymäärästä",
    optional: true
  },
  personsInjured: {
    type: Boolean,
    label: "Henkilövahinkoja tapahtui",
    optional: true
  },
  avgWind: {
    type: Number,
    label: "Maatuuli (keskiarvo, m/s)",
    optional: true
  },
  gustWind: {
    type: Number,
    label: "Maatuuli (huiput, m/s)",
    optional: true
  },
  discipline: {
    type: String,
    label: "Hyppytyyppi",
    allowedValues: ['CF','Freefly','Freestyle','FS','Kuvaus','Lauta','Liitopuku','Taito','Tarkkuus','Vesi','Yö','Muu'],
    autoform: {
      afFieldInput: {
        firstOption: "(Valitse hyppytyyppi)"
      }
    }
  },
  whatHappened: {
    type: String,
    label: "Mitä tapahtui?",
    autoform: {
      rows: 8
    }
  },
  whyHappened: {
    type: String,
    label: "Miksi näin tapahtui?",
    autoform: {
      rows: 8
    }
  },  
  howToPrevent: {
    type: String,
    label: "Miten tapahtuma olisi ollut vältettävissä?",
    autoform: {
      rows: 8
    }
  },
  otherDamages: {
    type: String,
    label: "Muut vahingot?",
    autoform: {
      rows: 4
    }
  }
});

Vtr.attachSchema(Schemas.Vtr);

Vtr.allow({
  'insert': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    return true; 
  },
  'update': function (userId,doc) {
    /* user and doc checks ,
    return true to allow insert */
    return true; 
  }
});