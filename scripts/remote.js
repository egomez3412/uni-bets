db.collection('bets').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        datas = doc.data();
        //console.log(doc.data());
        var span = '<span>' + datas.points + '</span>';
        document.getElementById("firebase-test").innerHTML += 'Content: ' + span + '<br>'; 
    });
});