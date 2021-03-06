
var through = require('through2'),
    opl = require('../');

module.exports.decodeStream = {};

module.exports.decodeStream.factory = function(test, common) {
  test('factory', function(t) {
    var stream = opl.decodeStream();
    t.equal(typeof stream, 'object', 'new stream');
    t.end();
  });
}

module.exports.decodeStream.decode_node = function(test, common) {
  var line = "n204648 v37 dV c32514672 t2015-07-09T09:46:58Z i3043782 uDK_VJCS Tele=1,name=Wellington,is_in=North%20%Island%2c%%20%New%20%Zealand,place=city,capital=yes,name:af=Wellington,name:am=%12cc%%120a%%1295%%130d%%1270%%1295%,name:ar=%0648%%064a%%0644%%064a%%0646%%063a%%062a%%0648%%0646%,name:az=Vellinqton,name:be=Велінгтан,name:bg=Уелингтън,name:bn=%0993%%09af%%09bc%%09c7%%09b2%%09bf%%0982%%099f%%09a8%,name:bo=%0f5d%%0f7a%%0f0b%%0f63%%0f72%%0f44%%0f0b%%0f50%%0f7c%%0f53%%0f0d%,name:bs=Wellington,name:cv=Веллингтон,name:de=Wellington,name:el=Ουέλλινγκτον,name:en=Wellington,name:eo=Velingtono,name:fa=%0648%%0644%%06cc%%0646%%06af%%062a%%0648%%0646%,name:gu=%0ab5%%0ac7%%0ab2%%0abf%%0a82%%0a97%%0acd%%0a9f%%0aa8%,name:he=ולינגטון,name:hi=%0935%%0947%%0932%%093f%%0902%%0917%%094d%%091f%%0928%,name:ht=Welintòn,name:hu=Wellington,name:hy=Վելինգտոն,name:is=Wellington,name:ja=%30a6%%30a7%%30ea%%30f3%%30c8%%30f3%,name:ka=%10d5%%10d4%%10da%%10d8%%10dc%%10d2%%10e2%%10dd%%10dc%%10d8%,name:kn=%0cb5%%0cc6%%0cb2%%0ccd%%0cb2%%0cbf%%0c82%%0c97%%0ccd%%0c9f%%0ca8%%0ccd%,name:ko=%c6f0%%b9c1%%d134%,name:ku=Wellington,name:la=Vellingtonia,name:lt=Velingtonas,name:lv=Velingtona,name:mi=Te%20%Whanganui-a-Tara,name:mk=Велингтон,name:mn=Веллингтон,name:mr=%0935%%0947%%0932%%093f%%0902%%0917%%094d%%091f%%0928%,name:my=%101d%%101a%%103a%%101c%%1004%%103a%%1010%%1014%%103a%%1019%%103c%%102d%%102f%%1037%,name:os=Веллингтон,name:pl=Wellington,name:ru=Веллингтон,name:sm=Ueligitone,name:sr=Велингтон,name:sv=Wellington,name:ta=%0bb5%%0bc6%%0bb2%%0bbf%%0b99%%0bcd%%0b9f%%0ba9%%0bcd%%2c%%20%%0ba8%%0bbf%%0baf%%0bc2%%0b9a%%0bbf%%0bb2%%0bbe%%0ba8%%0bcd%%0ba4%%0bc1%,name:th=%0e40%%0e27%%0e25%%0e25%%0e34%%0e07%%0e15%%0e31%%0e19%,name:ty=Whanga-nui-a-Tara,name:ug=%06cb%%06d0%%0644%%0644%%0649%%0646%%06af%%062a%%0648%%0646%,name:uk=Веллінгтон,name:ur=%0648%%06cc%%0644%%0646%%06af%%0679%%0646%,name:yi=װעלינגטאן,name:zh=%60e0%%9748%%9813%,int_name=Wellington,name:ang=Weolingtūn,name:arz=%0648%%064a%%0644%%064a%%0646%%062c%%062a%%0648%%0646%,name:bpy=%09f1%%09c7%%09b2%%09bf%%0982%%099f%%09a8%,name:new=%0935%%0947%%0932%%093f%%0902%%0917%%091f%%0928%,name:xmf=%10d5%%10d4%%10da%%10d8%%10dc%%10d2%%10d7%%10dd%%10dc%%10d8%,wikipedia=en:Wellington,population=201300,admin_level=2,is_in:ocean=Pacific,name:zh-yue=%5a01%%9748%%9813%,is_in:country=New%20%Zealand,name:be-x-old=Вэлінгтан,is_in:country_code=NZ x174.7772239 y-41.2887639";
  test('decode_node', function(t) {
    var stream = opl.decodeStream();
    stream.pipe( through.obj( function assert( obj, _, next ){
      t.deepEqual( obj, { changeset: '32514672', deleted: 'V', latitude: '-41.2887639', longitude: '174.7772239', node_id: '204648', tags: { admin_level: '2', capital: 'yes', ele: '1', int_name: 'Wellington', is_in: 'North Island, New Zealand', 'is_in:country': 'New Zealand', 'is_in:country_code': 'NZ', 'is_in:ocean': 'Pacific', name: 'Wellington', 'name:af': 'Wellington', 'name:am': 'ዌሊንግተን', 'name:ang': 'Weolingtūn', 'name:ar': 'ويلينغتون', 'name:arz': 'ويلينجتون', 'name:az': 'Vellinqton', 'name:be': 'Велінгтан', 'name:be-x-old': 'Вэлінгтан', 'name:bg': 'Уелингтън', 'name:bn': 'ওয়েলিংটন', 'name:bo': 'ཝེ་ལིང་ཐོན།', 'name:bpy': 'ৱেলিংটন', 'name:bs': 'Wellington', 'name:cv': 'Веллингтон', 'name:de': 'Wellington', 'name:el': 'Ουέλλινγκτον', 'name:en': 'Wellington', 'name:eo': 'Velingtono', 'name:fa': 'ولینگتون', 'name:gu': 'વેલિંગ્ટન', 'name:he': 'ולינגטון', 'name:hi': 'वेलिंग्टन', 'name:ht': 'Welintòn', 'name:hu': 'Wellington', 'name:hy': 'Վելինգտոն', 'name:is': 'Wellington', 'name:ja': 'ウェリントン', 'name:ka': 'ველინგტონი', 'name:kn': 'ವೆಲ್ಲಿಂಗ್ಟನ್', 'name:ko': '웰링턴', 'name:ku': 'Wellington', 'name:la': 'Vellingtonia', 'name:lt': 'Velingtonas', 'name:lv': 'Velingtona', 'name:mi': 'Te Whanganui-a-Tara', 'name:mk': 'Велингтон', 'name:mn': 'Веллингтон', 'name:mr': 'वेलिंग्टन', 'name:my': 'ဝယ်လင်တန်မြို့', 'name:new': 'वेलिंगटन', 'name:os': 'Веллингтон', 'name:pl': 'Wellington', 'name:ru': 'Веллингтон', 'name:sm': 'Ueligitone', 'name:sr': 'Велингтон', 'name:sv': 'Wellington', 'name:ta': 'வெலிங்டன், நியூசிலாந்து', 'name:th': 'เวลลิงตัน', 'name:ty': 'Whanga-nui-a-Tara', 'name:ug': 'ۋېللىنگتون', 'name:uk': 'Веллінгтон', 'name:ur': 'ویلنگٹن', 'name:xmf': 'ველინგთონი', 'name:yi': 'װעלינגטאן', 'name:zh': '惠靈頓', 'name:zh-yue': '威靈頓', place: 'city', population: '201300', wikipedia: 'en:Wellington' }, timestamp: '2015-07-09T09:46:58Z', user_id: '3043782', username: 'DK_VJCS', version: '37' });
      t.end();
    }));
    stream.write( line );
  });
}

module.exports.decodeStream.decode_way = function(test, common) {
  var line = "w5080807 v20 dV c21900040 t2014-04-24T04:48:07Z i1839337 uhowdystranger Tname=Chelsea%20%Street,FIXME=verify%20%highway%20%tag.%20%Just%20%adding%20%something%20%after%20%the%20%license%20%bot%20%nuked%20%it,oneway=no,bicycle=yes,highway=unclassified,cycleway=no Nn2743630574,n34543635,n2743630554,n2743630546,n2743630559,n2743630542,n34543636,n2743630512,n2793911375,n2793911377,n2743630514,n2812587565,n2743630466,n2812587571,n34543638,n2812587755,n2812587757,n2467445974,n2467445976";
  test('decode_way', function(t) {
    var stream = opl.decodeStream();
    stream.pipe( through.obj( function assert( obj, _, next ){
      t.deepEqual( obj, { changeset: '21900040', deleted: 'V', nodes: [ '2743630574', '34543635', '2743630554', '2743630546', '2743630559', '2743630542', '34543636', '2743630512', '2793911375', '2793911377', '2743630514', '2812587565', '2743630466', '2812587571', '34543638', '2812587755', '2812587757', '2467445974', '2467445976' ], tags: { FIXME: 'verify highway tag. Just adding something after the license bot nuked it', bicycle: 'yes', cycleway: 'no', highway: 'unclassified', name: 'Chelsea Street', oneway: 'no' }, timestamp: '2014-04-24T04:48:07Z', user_id: '1839337', username: 'howdystranger', version: '20', way_id: '5080807' });
      t.end();
    }));
    stream.write( line );
  });
}

module.exports.decodeStream.decode_relation = function(test, common) {
  var line = "r35631 v1 dV c53402 t2008-10-04T02:35:46Z i39391 ufolbrich Tname=Newtown%20%to%20%Hataitai%20%Walkway,type=route,route=foot,network=lwn Mw26100390@,w27500938@,w27500939@,w27500940@,w27500941@,w27500944@";
  test('decode_relation', function(t) {
    var stream = opl.decodeStream();
    stream.pipe( through.obj( function assert( obj, _, next ){
      t.deepEqual( obj, { changeset: '53402', deleted: 'V', members: 'w26100390@,w27500938@,w27500939@,w27500940@,w27500941@,w27500944@', relation_id: '35631', tags: { name: 'Newtown to Hataitai Walkway', network: 'lwn', route: 'foot', type: 'route' }, timestamp: '2008-10-04T02:35:46Z', user_id: '39391', username: 'folbrich', version: '1' });
      t.end();
    }));
    stream.write( line );
  });
}

module.exports.all = function (tape, common) {

  function test(name, testFunction) {
    return tape('decodeStream: ' + name, testFunction)
  }

  for( var testCase in module.exports.decodeStream ){
    module.exports.decodeStream[testCase](test, common);
  }
}
