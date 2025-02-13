/*!
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{const e={initialPreviewMode:"78900",previewModes:["$dataSets"],dataSets:[{id:"78900",label:"David Lee",values:{guestName:"David Lee",reservationNumber:"Y2JKH5G1Z",guestArrivalDate:new Date(2024,7,22).toLocaleDateString(),guestDepartureDate:new Date(2024,8,22).toLocaleDateString(),numberOfGuests:2,roomType:"Double Room",guestPhoneNumber:"567-890-1234",guestDiscount:"20%",hotelRoomPhoto:"../assets/img/hotel-room.jpg",additionalValueProposition:'<div class="avp"><div class="avp-header"><img class="avp-header__left-edge" src="../assets/img/left-edge.svg" alt="" /><h3 class="avp-header__text">SPA offers hand-picked for you <strong class="avp-header__text--discount">with a special 20% discount</strong></h3><img class="avp-header__right-edge" src="../assets/img/right-edge.svg" alt="" /></div><div class="avp-content"><div class="avp-offer"><img class="avp-offer__left-blob" src="../assets/img/left-blob.svg" alt="" /><h4 class="avp-offer__header">Harmony Found: Thai Massage and Foot Reflexology</h4><p>Blissful Thai massage & foot reflexology.</p></div><div class="avp-offer"><h4 class="avp-offer__header">Twin Tranquility: Couples\' Thai Massage</h4><p>Relaxing massage for two.</p></div><div class="avp-offer"><img class="avp-offer__right-blob" src="../assets/img/right-blob.svg" alt="" /><img class="avp-offer__dots" src="../assets/img/dots.svg" alt="" /><h4 class="avp-offer__header">Serenity Through Scent: Aromatherapy Massage</h4><p>Aromatic massage for peace.</p></div></div></div>'}}]};window.ClassicEditor.create(document.querySelector("#snippet-merge-fields-variables"),{mergeFields:{...window.ClassicEditor.defaultConfig.mergeFields,...e},toolbar:{items:["insertMergeField"].concat(window.ClassicEditor.defaultConfig.toolbar.items)},initialData:'<p style="text-align: center;">Dear {{guestTitle}} {{guestName}}</p><p>This email confirms your reservation at Serenity Springs Resort.We\'re delighted to welcome you on <strong>{{guestArrivalDate}}</strong>!</p><figure class="image" width="600" height="400"><img src="{{hotelRoomPhoto}}" /><figcaption>Quick look into your {{roomType}} experience</figcaption></figure>{{additionalValueProposition}}<p><em>Sincerely</em><br /><em>The Team at Serenity Springs Resort</em></p>'}).then((e=>{window.editor=e,window.preventPasteFromOfficeNotification=!0})).catch((e=>{console.error(e.stack)}))})();
//# sourceMappingURL=snippet.js.map