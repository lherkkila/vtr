Dropzones = new Mongo.Collection('dropzones');

Schemas.Dropzone = new SimpleSchema({
    name: { // Name of dropzone (Skydive Närpiö)
        type: String,
        label: "Name",
        max: 200
    },
    airfield: { // ICAO-code of airfield, EFHN
        type: String,
        label: "Airfield"
    },
    elevation: { // Elevation of dropzone in meters
        type: Number,
        label: "Elevation (m)",
        optional: true
    },
    website: { // Official website of the dropzone
      type: String,
      label: "Website",
      optional: true
    },
    email: { // Official website of the dropzone
      type: String,
      label: "Email",
      optional: true
    },
    gmapid: { // Google maps id for landing zone maps, can be found from googlemapsengine url, mid=gmapid
      type: String,
      label: "Google Maps ID",
      optional: true
    },
    facebook: { // Link to official facebook page of dz
      type: String,
      label: "Facebook link",
      optional: true
    },
    coordinate: { // coordinates object
      type: GeocoordsSchema 
    },
    aircrafts: { // aircrafts which are available on site
      type: [Object],
      optional: true
    },
    "aircrafts.$.id": {
      type: SimpleSchema.RegEx.Id,
      autoform: {
            firstOption: "(Select aircrafts available on dz)",
            options: function() {
              return _.map(Aircrafts.find().fetch(),function (value){
                return {
                    label: value.make + ' ' + value.model + ' (' + value.registration + ')', value: value._id};
              })
            }
        }
    },
    managers: { // who is managing this property on pinnikey
      type: [Object],
      optional: true
    },
    "managers.$.id": {
      type: SimpleSchema.RegEx.Id,
      autoform: {
            firstOption: "(Select dz manager)",
            options: function() {
              return _.map(Meteor.users.find().fetch(),function (value){
                return {
                    label: value.profile.firstName + ' ' + value.profile.lastName + ' (' + value.username + ')', value: value._id};
              })
            }
        }
    },
    "managers.$.role": { // role of this manager
      type: String,
      allowedValues: ['DZO', 'Safety', 'Manager'],
      optional: true
    },
    people: {
      type: [Object],
      optional: true
    },
    "people.$.id": {
      type: SimpleSchema.RegEx.Id,
      autoform: {
            firstOption: "(Select people from list)",
            options: function() {
              return _.map(Meteor.users.find().fetch(),function (value){
                return {
                    label: value.profile.firstName + ' ' + value.profile.lastName + ' (' + value.username + ')', value: value._id};
              })
            }
        }
    },
    "people.$.localid": {
      type: String,
      optional: true,
      label: "Skydiver's local id (unique identification number/string on local database"
    },
    "people.$.member": {
      type: Boolean,
      optional: true,
      label: "Member of this organization"
    },
    "people.$.pilot": {
      type: Boolean,
      optional: true,
      label: "Acting as a pilot?"
    }
});

Dropzones.attachSchema(Schemas.Dropzone);

Dropzones.allow({
    'insert': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
    'update': function (userId,doc) {
      /* user and doc checks ,
      return true to allow insert */
      return true; 
    },
  });