// pull pricing data from Firebase ----------
firebase.database().ref('membership/').once('value').then(function(snapshot) {
    snapshot.forEach(function(userSnapshot) {
        var id = userSnapshot.val();
        
        var pricing = document.createTextNode(id.price);
        var description = document.createTextNode(id.description);
    });
});