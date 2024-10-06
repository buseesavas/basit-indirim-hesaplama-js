let fiyat = Number(prompt('Ürün fiyatı ne?'));
let indirim = Number(prompt('Yüzde kaç indirim var?'));
let indirimliFiyat = fiyat - ((fiyat * indirim) / 100);
alert('İndirimli fiyat: ' + indirimliFiyat);