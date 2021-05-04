const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)

const containerH2 = $('.container__nominations-h2')
const prevBtn = $('.prev')
const nextBtn = $('.next')
const DKBtn=$('.header__nav1-login-DK')
const DNBtn=$('.header__nav1-login-DN')
const modal = $('.modal')
const canel=$$('.form-canel')
const formDK=$('.form-1')
const formDN=$('.form-2')
const submitDK=$('.form-submitDK')
const submitDN=$('.form-submitDN')
const topBtns=$$('.container__nominations2-top-list')
const list__Tops= $$('.list-top__story')
const iconsearchMB = $('.header__nav1-logo-icon-mb')

// SuB main


const app={
    storyIndex : 0,
    totalstorymain : 36,
    pagination_itemIndex: 0,
    autoStory : false,
    topstory : 8,
    follow :0,
    storys : [
        {
            name: 'Bách Luyện Thành Thần',
            image: './assets/img/bach-luyen-thanh-than.jpg',
            chapter :  575,
            oclock : '2 ngày trước'
        },
        {
            name: 'Tu La Võ Thần',
            image: './assets/img/tu-la-vo-than.jpg',
            chapter :  110,
            oclock : '58 phút truoc'
        },
        {
            name: 'Bị Dạy Dỗ Thành Thánh',
            image: './assets/img/bi-day-do-thanh-thanh.jpg',
            chapter :  24,
            oclock : '2 ngày trước'
        },
        {
            name: 'Thương Nguyên Đồ',
            image: './assets/img/thuong-nguyen-do.jpg',
            chapter :  129,
            oclock : '6 phút trước'
        },
        {
            name: 'Thần Võ Thiên Tôn',
            image: './assets/img/than-vo-thien-ton.jpg',
            chapter :  304,
            oclock : '37 phút trước'
        },
        {
            name: 'Yêu Giả Vi Vương',
            image: './assets/img/yeu-gia-vi-vuong.jpg',
            chapter :  212,
            oclock : '1 giờ trước'
        },
        {
            name: 'Ngày Mai Tôi Sẽ Chết',
            image: './assets/img/ngay-mai-toi-se-chet.jpg',
            chapter : 16,
            oclock : '4 ngày trước'
        },
        {
            name: 'Võ Luyện Đỉnh Phong',
            image: './assets/img/vo-luyen-dinh-phong.jpg',
            chapter : 1086,
            oclock : ' 2 giờ trước'
        }
    ],
    storycontainer : [
        {
            name: 'Toàn Chức Pháp Sư',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/127/toan-chuc-phap-su.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 143491292,
            viewMonth : 6364835,
            viewWeek : 2684246,
            viewDay : 123456,
            ratings : 3,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Kịch Trường Của Takemichi',
            update : '13:03 21/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/94/kich-truong-cua-takemichi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 16327335,
            viewMonth : 7770011,
            viewWeek : 2883246,
            viewDay : 23456,
            ratings : 5,
            hit_reviews : 17175,
            folow : 24879,
            like : 52,
            comment : 3098,
            tim : 1213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Bách Luyện Thành Thần',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/84/bach-luyen-thanh-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 142000735,
            viewMonth : 6106483,
            viewWeek : 2284246,
            viewDay : 29456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Địa Phủ Khai Phá Thương',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/113/dia-phu-khai-pha-thuong.jpeg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 20453577,
            viewMonth : 6104500,
            viewWeek : 1284246,
            viewDay : 12436,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Chi Tôn Đồng Thuật Sư: Tuyệt Thế Đại Tiểu Thư',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/28/chi-ton-dong-thuat-su-tuyet-the-dai-tieu-8924.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 30432518,
            viewMonth : 6663363,
            viewWeek : 1384246,
            viewDay : 13426,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Chung Cực Đấu La',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/121/chung-cuc-dau-la.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 23919459,
            viewMonth : 5963035,
            viewWeek : 684246,
            viewDay : 3456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Long Vương Truyền Thuyết',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/253/long-vuong-truyen-thuyet.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 43001292,
            viewMonth : 3362835,
            viewWeek : 24246,
            viewDay : 3456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Thương Nguyên Đồ',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/236/thuong-nguyen-do.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 8078803,
            viewMonth :64835,
            viewWeek : 2684,
            viewDay : 456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tiên Vương Trùng Sinh',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/41/tien-vuong-trung-sinh.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 40543418,
            viewMonth : 166546,
            viewWeek : 56412,
            viewDay : 2687,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Bị Dạy Dỗ Thành Thánh',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/28/bi-day-do-thanh-thanh.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 1023108,
            viewMonth : 4835,
            viewWeek : 1246,
            viewDay : 256,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Nguyên Tôn',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/146/nguyen-ton.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 72986959,
            viewMonth : 1353127,
            viewWeek : 163245,
            viewDay : 3457,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ngày Mai Tôi Sẽ Chết',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/158/ngay-mai-toi-se-chet.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 267006,
            viewMonth : 835,
            viewWeek : 146,
            viewDay : 12,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Giản Giới',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/42/gian-gioi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 19017154,
            viewMonth : 1246345,
            viewWeek : 256436,
            viewDay : 1236,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Yêu Giả Vi Vương',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/221/yeu-gia-vi-vuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 18581548,
            viewMonth : 1649243,
            viewWeek : 235621,
            viewDay : 24631,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Võ Luyện Đỉnh Phong',
            update : '00:27 24/04/2021', 
            image: 'http://st.nhattruyen.com/data/comics/32/vo-luyen-dinh-phong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 148491292,
            viewMonth : 8364835,
            viewWeek : 2284246,
            viewDay : 1623456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Thần Võ Thiên Tôn',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/198/than-vo-thien-ton.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 53544050,
            viewMonth : 1364832,
            viewWeek : 24246,
            viewDay : 3456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tu La Võ Thần',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/43/tu-la-vo-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 7812552,
            viewMonth : 364835,
            viewWeek : 26846,
            viewDay : 1256,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Võng Du Chi Cận Chiến Pháp Sư',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/64/vong-du-chi-can-chien-phap-su.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 10180601,
            viewMonth : 123432,
            viewDay : 1256,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ngân Chi Thủ Mộ Nhân',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/3/ngan-chi-thu-mo-nhan.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 9052160,
            viewMonth : 264835,
            viewWeek : 35469,
            viewDay : 2546,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ta Là Tà Đế',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/161/ta-la-ta-de.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 26671129,
            viewMonth : 164835,
            viewWeek : 23451,
            viewDay : 7243,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ta Là Đại Thần Tiên',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/133/ta-la-dai-than-tien.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 40459344,
            viewMonth : 364835,
            viewWeek : 24246,
            viewDay : 1456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Đấu La Đại Lục',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/107/dau-la-dai-luc.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 60896457,
            viewMonth : 4134542,
            viewWeek : 103254,
            viewDay : 23456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Nhất Kiếm Độc Tôn',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/232/nhat-kiem-doc-ton.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 11063842,
            viewMonth : 234621,
            viewWeek : 54312,
            viewDay : 987,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Quyền Bá Thiên Hạ',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/35/quyen-ba-thien-ha.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 18448436,
            viewMonth : 164235,
            viewWeek : 26246,
            viewDay : 1346,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Boruto',
            update : '00:27 24/04/2021', 
            image: 'http://st.nhattruyen.com/data/comics/148/boruto.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 3259126,
            viewMonth : 12435,
            viewWeek : 2342,
            viewDay : 194,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Điền viên mật sủng: Cô vợ nóng bỏng',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/83/dien-vien-mat-sung-co-vo-nong-bong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 5407182,
            viewMonth : 12434,
            viewWeek : 2341,
            viewDay : 123,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Nghịch Thiên Chiến Thần',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/78/nghich-thien-chien-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 18735143,
            viewMonth : 3214321,
            viewWeek : 234561,
            viewDay : 7432,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Chúa Tể Học Đường',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/94/chua-te-hoc-duong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 45214527,
            viewMonth : 1234213,
            viewWeek : 172543,
            viewDay : 12346,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Đại Chúa Tể',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/180/dai-chua-te.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 20452094,
            viewMonth : 123452,
            viewWeek : 23461,
            viewDay : 1843,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Đảo Hải Tặc',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/209/dao-hai-tac.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 43906221,
            viewMonth : 1264321,
            viewWeek : 12431,
            viewDay : 1886,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Thám Tử Conan',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/30/tham-tu-conan.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 62449687,
            viewMonth : 2364135,
            viewWeek : 124325,
            viewDay : 5346,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Pháp Sư Không Phép Thuật',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/69/phap-su-khong-phep-thuat.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 21575001,
            viewMonth : 164835,
            viewWeek : 22344,
            viewDay : 4257,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Đại Vương Tha Mạng',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/131/dai-vuong-tha-mang.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 26118325,
            viewMonth : 1546835,
            viewWeek : 354168,
            viewDay : 74321,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Vạn Cổ Kiếm Thần',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/35/van-co-kiem-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 12788603,
            viewMonth : 364835,
            viewWeek : 21346,
            viewDay : 5124,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Vạn Cổ Thần Vương',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/197/van-co-than-vuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 42921171,
            viewMonth : 2364835,
            viewWeek : 234621,
            viewDay : 52342,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tinh Võ Thần Quyết',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/18/tinh-vo-than-quyet.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 54497340,
            viewMonth : 4364005,
            viewWeek : 1243257,
            viewDay : 32578,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Anh Hùng ? Ta Không Làm Lâu Rồi',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/251/anh-hung-ta-khong-lam-lau-roi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 34981791,
            viewMonth : 1246325,
            viewWeek : 213452,
            viewDay : 8741,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Manh Sư Tại Thượng',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/129/manh-su-tai-thuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 35080899,
            viewMonth : 999365,
            viewWeek : 12364,
            viewDay : 3697,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Võ Động Càn Khôn',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/42/vo-dong-can-khon.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 16125257,
            viewMonth : 234687,
            viewWeek : 15214,
            viewDay : 2453,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Đệ Tử Của Ta Đều Là Súp Bờ Thần',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/34/de-tu-cua-ta-deu-la-sup-bo-than.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 8183493,
            viewMonth : 12345,
            viewWeek : 9999,
            viewDay : 124,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Hòi Sinh Thế Giới',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/236/hoi-sinh-the-gioi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 14016881,
            viewMonth : 12345,
            viewWeek : 6354,
            viewDay : 236,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tuyệt thế Đường Môn - Đấu La Đại Lục 2',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/138/tuyet-the-duong-mon-dau-la-dai-luc-2.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 40242959,
            viewMonth : 3364835,
            viewWeek : 461216,
            viewDay : 66473,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ta Là Vua Pháp Sư',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/19/ta-la-vua-phap-su.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 16783769,
            viewMonth : 187246,
            viewWeek : 22546,
            viewDay : 1246,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Vua Trộm Mộ',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/92/vua-trom-mo.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 22859677,
            viewMonth : 2431671,
            viewWeek : 357961,
            viewDay : 1112,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ta Chẳng Qua Là Một Đại La Kim Tiên',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/11/ta-chang-qua-la-mot-dai-la-kim-tien.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 12969978,
            viewMonth : 842134,
            viewWeek : 12435,
            viewDay : 396,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tây Du Ký Ngoại Truyện',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/99/tay-du-ky-ngoai-truyen.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 6139291,
            viewMonth : 12463,
            viewWeek : 2463,
            viewDay : 124,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Thần Cấp Ngư Phu',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/245/than-cap-ngu-phu.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 11135764,
            viewMonth : 1521346,
            viewWeek : 124561,
            viewDay : 2586,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Truy Tìm Ngọc Rồng Siêu Cấp',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/231/truy-tim-ngoc-rong-sieu-cap.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 4703244,
            viewMonth : 36421,
            viewWeek : 1566,
            viewDay : 26,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Trọng Sinh Sau Tám Vạn Năm',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/205/trong-sinh-sau-tam-van-nam.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 38230073,
            viewMonth : 2346321,
            viewWeek : 54213,
            viewDay : 5697,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Anh Hùng OnePunch',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/37/anh-hung-onepunch.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 65048491,
            viewMonth : 1483215,
            viewWeek : 564231,
            viewDay : 98423,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Tôn Thượng',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/9/ton-thuong.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 25431679,
            viewMonth : 1364835,
            viewWeek : 84246,
            viewDay : 1456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Hội Pháp Sư nhiệm vụ trăm năm',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/173/fairy-tail-100-year-quest.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 7896412,
            viewMonth : 24312,
            viewWeek : 4213,
            viewDay : 864,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Trở Về Làm Đại Lão Thời Mạt Thế',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/236/tro-ve-lam-dai-lao-thoi-mat-the.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 12345687,
            viewMonth : 612431,
            viewWeek : 21463,
            viewDay : 123456,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Gả Cho Một Tên Thái Giám Đáng Ghét',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/248/ga-cho-mot-ten-thai-giam-dang-ghet.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 24563135,
            viewMonth : 1243565,
            viewWeek : 462132,
            viewDay : 6444,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Phượng Nghịch Thiên Hạ',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/220/phuong-nghich-thien-ha.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 50341246,
            viewMonth : 2364835,
            viewWeek : 998234,
            viewDay : 10126,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Trường Học Siêu Anh Hùng',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/182/truong-hoc-sieu-anh-hung.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 21356894,
            viewMonth : 2123460,
            viewWeek : 555314,
            viewDay : 65871,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Ác Ma Đừng Hôn Tôi',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/106/ac-ma-dung-hon-toi.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 12346212,
            viewMonth : 654134,
            viewWeek : 26146,
            viewDay : 5426,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Máu của cậu chỉ thuộc về mình tớ...',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/193/mau-cua-cau-chi-thuoc-ve-minh-to.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 18542346,
            viewMonth : 421346,
            viewWeek : 56123,
            viewDay : 2546,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Chí Tôn Võ Đế',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/213/chi-ton-vo-de.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 30124698,
            viewMonth : 2348762,
            viewWeek : 864213,
            viewDay : 65423,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
        {
            name: 'Bạn Gái Chung Nhà',
            update : '00:27 24/04/2021', 
            image: 'http://st.imageinstant.net/data/comics/154/ban-gai-chung-nha.jpg',
            author : 'Đang cập nhật',
            status: 'Đang cập nhật',
            category : ['Action',' Adventure',' Fantasy','Manhua','Mystery','Romance','Shounen',' Supernatural','Truyện Màu'],
            totalview : 26431354,
            viewMonth : 666321,
            viewWeek : 84213,
            viewDay : 7861,
            ratings : 4,
            hit_reviews : 150353,
            folow : 81329,
            like : 152,
            comment : 20098,
            tim : 10213,
            content : 'Tỉnh lại sau giấc ngủ, thế giới đại biến. Quen thuộc cao trung truyền thụ chính là phép thuật, nói cho mọi người muốn trở thành một tên xuất sắc Ma Pháp Sư. Ở lại đô thị ở ngoài du đãng tập kích nhân loại ma vật yêu thú, mắt nhìn chằm chằm. Tôn trọng khoa học thế giới đã biến thành tôn trọng phép thuật, một mực có như nhau lấy học tra đối xử giáo viên của chính mình, như nhau ánh mắt dị dạng bạn học, như nhau xã hội tầng dưới chót giãy dụa ba ba, như nhau thuần mỹ nhưng không thể bước đi không phải huyết thống muội muội... Bất quá, Mạc Phàm phát hiện tuyệt đại đa số người đều chỉ có thể chủ tu nhất hệ phép thuật, chính mình nhưng là toàn hệ toàn năng pháp sư!',
            listchapter : [
                {
                chapter : 685,
                hour : '39 phút trước',
                view : 844
                },
                {
                chapter : 684,
                hour : '1 ngày trước',
                view : 35836
                },
                {
                chapter : 683,
                hour : '2 ngày trước',
                view : 64163
                },
                {
                chapter : 682,
                hour : '6 ngày trước',
                view : 92214
                },
                {
                chapter : 681,
                hour : '7 ngày trước',
                view : 72347
                },
                {
                chapter : 680,
                hour : '9 ngày trước',
                view : 88564
                },
                {
                chapter : 679,
                hour : '13 ngày trước',
                view : 105533
                },
                {
                chapter : 678,
                hour : '14 ngày trước',
                view : 78729
                },
                {
                chapter : 677,
                hour : '16 ngày trước',
                view : 84715
                },
                {
                chapter : 676,
                hour : '20 ngày trước',
                view : 102267
                },
                {
                chapter : 675,
                hour : '21 ngày trước',
                view : 83729
                },
                {
                chapter : 674,
                hour : '23 ngày trước',
                view : 91402
                },
                {
                chapter : 673,
                hour : '27 ngày trước',
                view : 107716
                },
                {
                chapter : 672,
                hour : '28 ngày trước',
                view : 95570
                },{
                chapter : 671,
                hour : '09:14 24/03',
                view : 98560
                },
                {
                chapter : 670,
                hour : '07:57 20/03',
                view : 116762
                },
                {
                chapter : 669,
                hour : '07:59 19/03',
                view : 95247
                },
                {
                chapter : 668,
                hour : '07:59 17/03',
                view : 103643
                },
                {
                chapter : 667,
                hour : '08:26 13/03',
                view : 117673
                },
                {
                chapter : 666,
                hour : '07:37 12/03',
                view : 93.037
                },
                {
                chapter : 665,
                hour : '07:50 10/03',
                view : 104044
                },
                {
                chapter : 664,
                hour : '07:49 06/03',
                view : 116302
                },
                {
                chapter : 663,
                hour : '07:45 05/03',
                view : 98215
                },
                {
                chapter : 662,
                hour : '08:17 03/03',
                view : 107324
                },
                {
                chapter : 661,
                hour : '08:48 28/02',
                view : 118895
                },
                {
                chapter : 660,
                hour : '08:09 27/02',
                view : 105794
                },
                {
                chapter : 659,
                hour : '08:39 26/02',
                view : 95952
                },
                {
                chapter : 658,
                hour : '08:05 25/02',
                view : 97257
                },
                {
                chapter : 657,
                hour : '08:05 24/02',
                view : 98176
                },
                {
                chapter : 656,
                hour : '08:30 23/02',
                view : 100466
                },
                {
                chapter : 655,
                hour : '08:32 22/02',
                view : 104239
                }
            ]
        },
    ],
    biendoichuoi : function(x){
        var y='';
        x= x+''
        var length = x.length
        var z 
        if(length%3==0){
            z = length/3
        }else{
            z=Math.floor(length/3) +1
        }
        // length = length + z-1
        var Array = []
        for(var i=0;i<x.length;i++){
            Array[i]=x[i]
        }
        for(var i=0;i<z-1;i++){
            Array.splice((length)-3*(i+1),0,'.')
        }
        for(var i=0;i<Array.length;i++){
           y += Array[i]
        }
        return y
    },
    render : function(){
        const htmls = this.storys.map((story,index)=>{
            return `
            <li class="nomianations__list-item-story col l-2-4 m-3 k-4 c-6 ">
            <div  class="nomianations__item-alll">
                <img class="nomianations__item-story-img" src="${story.image}" alt="">
                <div class="nomianations__item-information">
                <a href="" class="nav2__story-cmt" >
                    <h2 class="nomianations-information-ctm">${story.name} </h2>
                </a>
                <div class="nomianations-information-chap-hour">
                    <a href="" class="nomianations-information-chap">
                        Chapter ${story.chapter}
                    </a>
                    <h3 class="nomianations-information-hour">
                        <i class="far fa-clock"></i>
                        ${story.oclock}
                    </h3>
                </div>
            </div>
            </div>
            
        </li>
             `
        
        })
       
        containerH2.innerHTML = htmls.join('')
    },
    rendercontainer : function(){
        var _this = this
        const htmls= this.storycontainer.map(story=>{
            const htmlcategory = story.category.map(categorys=>{
                return `
                <a href="" class="sub-container__item-category">${categorys}</a>
                    <span>-</span>
                `
            })
            var htmlStar =''
            for(var i=0;i<5;i++){
                if(i<story.ratings){
                    htmlStar +=`<i class="fas fa-star sub-container__stars color-star"></i>` + '\n'
                }else htmlStar +=`<i class="fas fa-star sub-container__stars"></i>` + '\n'
            }
            const htmlchapter= story.listchapter.map((chapter,index)=>{
                return `<li class="sub-container__list-chapter ${index===18?'height-chapter' : ''}">
                <a href="" class="sub-container__item-chapter">Chapter ${_this.biendoichuoi(chapter.chapter)}</a>
                <span class="sub-container__item-hour">${chapter.hour}</span>
                <span class="sub-container__item-hour">${_this.biendoichuoi(chapter.view)}</span>
                </li>`
            })
            return`
            <div class="container__nominationssub active col l-12 m-12">
            <div class="sub-container__pate">
                <a class="sub-container__pate-item">Trang Chủ
                    <i class="fas fa-angle-double-right"></i>
                </a>
                <a class="sub-container__pate-item">Thể Loại
                    <i class="fas fa-angle-double-right"></i>
                </a>
                <a class="sub-container__pate-item">${story.name}</a>
            </div>
            <div class="row sub-container__content">
                <div class="sub-container__content-img col l-4 m-4 c-12">
                    <img src="${story.image}" alt="">
                </div>
                <div class="sub-container__content-story col l-8 m-8 c-12">
                    <div class="sub-container__content-first">
                        <h2 class="sub-container__first-name">${story.name}</h2>
                        <h3 class="sub-container__first-hour">[ Cập nhật lúc: ${story.update} ]</h3>
                    </div>
                    <ul class="sub-container__content-second">
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fas fa-user"></i>
                                Tác Giả</h3>
                            <h3 class="sub-container__item-left">${story.author}</h3>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-rss"></i>
                                Tình Trạng</h3>
                            <h3 class="sub-container__item-left">${story.status}</h3>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-tags"></i>
                                Thể loại</h3>
                            <div class="sub-container__list-category">
                                ${htmlcategory.join('')}
                            </div>
                        </li>
                        <li class="sub-container__list-second">
                            <h3 class="sub-container__item-rigth">
                                <i class="fa fa-eye"></i>
                                Lượt Xem</h3>
                            <h3 class="sub-container__item-left">${_this.biendoichuoi(story.totalview)}</h3>
                        </li>
                    </ul>
                    <div class="sub-container__ratings">
                        <a class="sub-container__ratings-name">${story.name}</a>
                        <h3 class="sub-container__ratings-content">Xếp hạng: ${_this.biendoichuoi(story.ratings)}/5 - ${_this.biendoichuoi(story.hit_reviews)} Lượt đánh giá.</h3>
                    </div>
                    <div class="sub-container__list-stars">
                        <div class="sub-container__stars-item ">
                            ${htmlStar}
                        </div>
                        <a href="" class="sub-container__like">
                            <i class="far fa-thumbs-up"></i>
                            Like <span>${_this.biendoichuoi(story.like)}</span>
                        </a>
                        <a href="" class="sub-container__like">
                            Share
                        </a>
                    </div>
                    <div class="sub-container__list-follow">
                            <a href="" class="sub-container__follow-item btn-sub__container">
                                <i class="fa fa-heart"></i>
                                Theo dõi
                            </a>
                            <a href="" class="sub-container__unfollow-item active btn-sub__container">
                                <i class="fa fa-heart"></i>
                                    Bỏ theo dõi
                            </a>
                        
                        <h3 class="sub-container__number-follow">${_this.biendoichuoi(story.folow = story.folow + _this.follow)}</h3>
                        <h4 class="sub-container__user-follow">Người theo dõi</h4>
                    </div>
                    <div class="sub-container__case-read">
                        <a href="" class=" btn-sub__container">
                            Đọc từ đầu
                        </a>
                        <a href="" class=" btn-sub__container">
                            Đọc mới nhất
                        </a>
                    </div>
                </div>
            </div>
            <div class="sub-container__plot">
                <h2 class="sub-container__plot-header ">
                    <i class="far fa-file-alt"></i>
                    NỘI DUNG
                </h2>
                <h3 class="sub-container__plot-content plot-height">
                        ${story.content} 
                </h3>
                <a href="" class="sub-container__plot-next">
                    Xem thêm
                    <i class="fas fa-angle-right"></i>
                </a>
                <a href="" class="sub-container__plot-prev active">
                    <i class="fas fa-angle-left"></i>
                    Thu hồi
                </a>
            </div>
            <div class="sub-container__chapter-story">
                <h2 class="sub-container__chapter-header ">
                    <i class="fas fa-align-justify"></i>
                   DANH SÁCH CHƯƠNG
                </h2>
                
                <div class=" sub-container__chapters">
                    <div class="sub-container__chapter-first">
                        <span class="sub-container__chapter-int">Số Chương</span>
                        <span class="sub-container__chapter-update">Cập Nhật</span>
                        <span class="sub-container__chapter-update">Lượt Xem</span>
                    </div>
                    <ul class="sub-container__chapter-second height-chapter">
                        ${htmlchapter.join('')}
                    </ul>
                    <div class="sub-container__chapter-last">
                        <a href="" class="sub-container__chapter-then active ">
                            <i class="fas fa-plus"></i>
                            Xem Thêm 
                        </a>
                        <a href="" class="sub-container__chapter-back">
                            
                            Thu Hồi
                        </a>
                    </div>
                </div>
            </div>
        </div>
            `
           
        })
        
         $('.container__nominations2-sub').innerHTML= htmls.join(' ')
    },
    rendercontainerMain : function(){
        const _this =this
        var next 
        if(this.storycontainer.length/this.totalstorymain===0){
            next=this.storycontainer.length/this.totalstorymain
        }else{
            next=Math.floor(this.storycontainer.length/this.totalstorymain)+1
        }
        const htmls= this.storycontainer.map((story,i)=>{
            const htmlchap= story.listchapter.map((chapter,index)=>{
                if(index<3){
                    return `
                    <div class="nav2__list-item-cmt">
                    <a href="" class="nav2__item-chap">Chapter ${_this.biendoichuoi(chapter.chapter)}</a>
                    <h4 class="nav2__item-hour">${chapter.hour}</h4>
                    </div>
                    `
                }
            })
            return `
            <div class="nomianations2__list-item-story ${i<this.totalstorymain ? 'active' : ''} col l-3 m-3 k-4 c-6">       
                <a href="">
                    <img class="nomianations2__item-story-img" src="${story.image}" alt="">
                    <div class="nav2__item-like">
                    <h5><i class="far fa-eye"></i>
                    ${_this.biendoichuoi(story.totalview)}</h5>
                    <h5><i class="fas fa-comment"></i>
                    ${_this.biendoichuoi(story.comment)}</h5>
                    <h5><i class="fas fa-heart"></i>
                    ${_this.biendoichuoi(story.tim)}</h5>
                    </div>
                </a>
                
        
                <a href="" class="nav2__story-cmt">
                    <h3 class="nav2__item-cmt-story">${story.name}</h3>
                </a>
                <span class="${i<10 ? 'icon-hot ': ''}"></span>
                ${htmlchap.join('')}
                </div>
            
            `
        })
        var htmlnext =''
            for(var i=0;i<next;i++){
                htmlnext=htmlnext + `
                <li class="pagination-item ${i===0? 'pagination-item__active': ''} ">
                <a href=""class="pagination-item__link">
                   ${i+1}
                </a>
            </li>
                `
        }
        $('.container__nominations2-list').innerHTML=htmls.join('')
        $('.pagination').innerHTML= htmlnext
    },
    clickStory : function(){
        $('.container__nav1').classList.add('active')
        $('.container__nominations2-cmt').classList.add('active')
        $('.container__nominations2 ').classList.add('active')
        $('.container__nominations2-sub').classList.remove('active')
        $('.new-cmt').classList.add('active')
    },
    renderTop : function(){
        var j=0
        var Topstory = [],weekStory = [],dayStory = []
        for(var i=0;i<this.storycontainer.length;i++){
            Topstory[i]=this.storycontainer[i]
            weekStory[i]=this.storycontainer[i]
            dayStory[i]=this.storycontainer[i]
        }
        const _this =this
        Topstory.sort(function(a,b){
            return b.viewMonth - a.viewMonth
        })
        weekStory.sort(function(a,b){
            return b.viewWeek - a.viewWeek
        })
        dayStory.sort(function(a,b){
            return b.viewDay - a.viewDay
        })
        const html = Topstory.map((story,i)=>{
            j++;
            if(i<10){
            return ` 
            <div class="row top-story__item">
            <div class="top-story__item-left col l-4 m-2 c-3">
                <span class="top-story__item-stt top${j}">${j<10 ? `0${j}` : j }</span>
                <a href="" class="top-story__item-img">
                    <img src="${story.image}" alt="" class="top-story__img">
                </a>
            </div>
            <div class="top-story__item-information col l-8 m-10 c-9">
                <a href="" class="top-story__item-name">
                    <h4 class="top-story__name">${story.name}</h4>
                </a>
                <div class="item-information__chap-eye">
                    <a href="" class="item-information__chap">Chapter ${story.listchapter[0].chapter}</a>
                    <h5 class="item-information__eye">
                        <i class="far fa-eye"></i>
                        ${_this.biendoichuoi(story.viewMonth)}</h5>
                </div>
            </div>
           
        </div>
            `
            }
        })
        // top week
        var k=0
        const htmlW = weekStory.map((story,i)=>{
            k++;
            if(i<10){
            return ` 
            <div class="row top-story__item">
            <div class="top-story__item-left col l-4 m-2 c-3">
                <span class="top-story__item-stt top${k}">${k<10 ? `0${k}` : k }</span>
                <a href="" class="top-story__item-img">
                    <img src="${story.image}" alt="" class="top-story__img">
                </a>
            </div>
            <div class="top-story__item-information col l-8 m-10 c-9">
                <a href="" class="top-story__item-name">
                    <h4 class="top-story__name">${story.name}</h4>
                </a>
                <div class="item-information__chap-eye">
                    <a href="" class="item-information__chap">Chapter ${story.listchapter[0].chapter}</a>
                    <h5 class="item-information__eye">
                        <i class="far fa-eye"></i>
                        ${_this.biendoichuoi(story.viewWeek)}</h5>
                </div>
            </div>
           
        </div>
            `
            }
        })
        // top Day
        var h=0
        const htmlD = dayStory.map((story,i)=>{
            h++;
            if(i<10){
            return ` 
            <div class="row top-story__item">
            <div class="top-story__item-left col l-4 m-2 c-3">
                <span class="top-story__item-stt top${h}">${h<10 ? `0${h}` : h }</span>
                <a href="" class="top-story__item-img">
                    <img src="${story.image}" alt="" class="top-story__img">
                </a>
            </div>
            <div class="top-story__item-information col l-8 m-10 c-9">
                <a href="" class="top-story__item-name">
                    <h4 class="top-story__name">${story.name}</h4>
                </a>
                <div class="item-information__chap-eye">
                    <a href="" class="item-information__chap">Chapter ${story.listchapter[0].chapter}</a>
                    <h5 class="item-information__eye">
                        <i class="far fa-eye"></i>
                        ${_this.biendoichuoi(story.viewDay)}</h5>
                </div>
            </div>
           
        </div>
            `
            }
        })
        $$('.list-top__story')[0].innerHTML = html.join('')
        $$('.list-top__story')[1].innerHTML = htmlW.join('')
        $$('.list-top__story')[2].innerHTML = htmlD.join('')
        var ArrayCT =[],m=0
        Topstory.forEach((story,i)=>{
            this.storycontainer.forEach((storyCT,j)=>{
                if(story.name.trim() === storyCT.name.trim() && i<10){
                    ArrayCT[m]=j
                    m++
                }
            })
        })
        weekStory.forEach((story,i)=>{
            this.storycontainer.forEach((storyCT,j)=>{
                if(story.name.trim() === storyCT.name.trim() && i<10){
                    ArrayCT[m]=j
                    m++
                }
            })
        })
        dayStory.forEach((story,i)=>{
            this.storycontainer.forEach((storyCT,j)=>{
                if(story.name.trim() === storyCT.name.trim() && i<10){
                    ArrayCT[m]=j
                    m++
                }
            })
        })
        // console.log(ArrayCT)
        const listStorysSUB = $$('.container__nominationssub.active')
        $$('.top-story__item').forEach((story,index)=>{
            story.onclick = function(e){
                _this.clickStory()
                for(var i=0;i<listStorysSUB.length;i++){
                    if(i!==ArrayCT[index]){
                        listStorysSUB[i].classList.add('active')
                    }
                    else  listStorysSUB[i].classList.remove('active')
                }
                e.preventDefault()
            }
        })
    },
    // Xu ly su kien Story
    handelEventStory : function(){
        // this.render()
        this.rendercontainer()
        this.rendercontainerMain()
        this.render()
        this.renderTop()
        const listStoryAuto = $$('.nomianations__list-item-story ')
        const listStorysSUB = $$('.container__nominationssub.active')
        const listStorys=$$('.nomianations2__list-item-story')
        const listnextND = $$('.sub-container__plot-next')
        const listcontent = $$('.sub-container__plot-content')
        const listprevND = $$('.sub-container__plot-prev')
        const listnextChap = $$('.sub-container__chapter-then')
        const listprevChap = $$('.sub-container__chapter-back')
        const listChapters = $$('.sub-container__chapter-second')
        const listChapItem = $$('.sub-container__list-chapter:nth-child(19)')
        const _this = this
       
        listStorys.forEach((story,index)=>{
            story.onclick = function(e){
               _this.clickStory()
                listStorysSUB[index].classList.remove('active')
                e.preventDefault()
                
                $$('.sub-container__follow-item')[index].onclick = function(e){
                    this.classList.add('active')
                    $$('.sub-container__unfollow-item')[index].classList.remove('active')
                    _this.follow = _this.follow +1
                    e.preventDefault()
                }
                
            }
            
        })
        listnextND.forEach((next,index)=>{
            next.onclick=function(e){
                $('.sub-container__plot-next').classList.remove('active')
                this.classList.add('active')
                listprevND[index].classList.remove('active')
                listcontent[index].classList.remove('plot-height')
                 e.preventDefault()
            }
        })
        listprevND.forEach((prev,index)=>{
            prev.onclick=function(e){
                $('.sub-container__plot-prev').classList.remove('active')
                this.classList.add('active')
                listnextND[index].classList.remove('active')
                listcontent[index].classList.add('plot-height')
                 e.preventDefault()
            }
        })
        listnextChap.forEach((next,index)=>{
            next.onclick= function(e){
            this.classList.remove('active')
            listprevChap[index].classList.add('active')
            listChapters[index].classList.remove('height-chapter')
            listChapItem[index].classList.remove('height-chapter')
             e.preventDefault()
            }
            
        })
        listprevChap.forEach((prev,index)=>{
            prev.onclick= function(e){
            this.classList.remove('active')
            listnextChap[index].classList.add('active')
            listChapters[index].classList.add('height-chapter')
            listChapItem[index].classList.add('height-chapter')
             e.preventDefault()
            }
            
        })
        // this.rendercontainer()
        // this.rendercontainerMain()
        const pagination_items = $$('.pagination-item')
        const nextmainBtn= $('.pagination-item-icon-next')
        const prevmainBtn= $('.pagination-item-icon-prev')
        // Main next
        pagination_items.forEach((pagination_item,index)=>{
            pagination_item.onclick= function(e){
                $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                for(var i=0;i<listStorys.length;i++){
                    if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                        listStorys[i].classList.add('active')
                    }
                    else listStorys[i].classList.remove('active')
                }
                console.log(listStorys.length)
                this.classList.add('pagination-item__active')
                nextmainBtn.onclick= function(e){
                    index++
                    var x= pagination_items.length
                    if(index>=x){
                        index=0
                    }
                    if(index>4&&index<x){
                        for(var i=0;i<index-4;i++){
                            pagination_items[i].classList.add('active')
                        }
                    }else {
                        pagination_items[index].classList.remove('active')
                        pagination_items[1].classList.remove('active')
                    }
                    $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                    pagination_items[index].classList.add('pagination-item__active')
                    for(var i=0;i<listStorys.length;i++){
                        if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                            listStorys[i].classList.add('active')
                        }
                        else listStorys[i].classList.remove('active')
                    }
                    console.log(index)
                    e.preventDefault()
                }
                prevmainBtn.onclick= function(e){
                    index--
                    var x= pagination_items.length
                    if(index<0){
                        index=x-1
                    }
                    if(index>4&&index<x){
                        for(var i=0;i<index-4;i++){
                            pagination_items[i].classList.add('active')
                        }
                    }else pagination_items[index].classList.remove('active')
                    $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
                    pagination_items[index].classList.add('pagination-item__active')
                    for(var i=0;i<listStorys.length;i++){
                        if(((index*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(index+1)))){
                            listStorys[i].classList.add('active')
                        }
                        else listStorys[i].classList.remove('active')
                    }
                    
                    e.preventDefault()
                }
                e.preventDefault()
            }
        })
        nextmainBtn.onclick= function(e){
            _this.pagination_itemIndex++
            var x= pagination_items.length
            if(_this.pagination_itemIndex>=x){
                _this.pagination_itemIndex=0
            }
            if(_this.pagination_itemIndex>4&&_this.pagination_itemIndex<x){
                for(var i=0;i<_this.pagination_itemIndex-4;i++){
                    pagination_items[i].classList.add('active')
                }
            }else {
                pagination_items[_this.pagination_itemIndex].classList.remove('active')
                pagination_items[1].classList.remove('active')
            }
            $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
            pagination_items[_this.pagination_itemIndex].classList.add('pagination-item__active')
            for(var i=0;i<listStorys.length;i++){
                if(((_this.pagination_itemIndex*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(_this.pagination_itemIndex+1)))){
                    listStorys[i].classList.add('active')
                }
                else listStorys[i].classList.remove('active')
            }
            console.log(_this.pagination_itemIndex)
            e.preventDefault()
        }
        prevmainBtn.onclick= function(e){
            _this.pagination_itemIndex--
            var x= pagination_items.length
            if(_this.pagination_itemIndex<0){
                _this.pagination_itemIndex=x-1
            }
            if(_this.pagination_itemIndex>4&&_this.pagination_itemIndex<x){
                for(var i=0;i<_this.pagination_itemIndex-4;i++){
                    pagination_items[i].classList.add('active')
                }
            }else pagination_items[_this.pagination_itemIndex].classList.remove('active')
            $('.pagination-item.pagination-item__active').classList.remove('pagination-item__active')
            pagination_items[_this.pagination_itemIndex].classList.add('pagination-item__active')
            for(var i=0;i<listStorys.length;i++){
                if(((_this.pagination_itemIndex*_this.totalstorymain)<=i&& i<(_this.totalstorymain*(_this.pagination_itemIndex+1)))){
                    listStorys[i].classList.add('active')
                }
                else listStorys[i].classList.remove('active')
            }
            console.log(_this.pagination_itemIndex)
            e.preventDefault()
        }
        // Top story nomination 1
        var ArrayCT =[]
        this.storys.forEach((story,i)=>{
            this.storycontainer.forEach((storyCT,j)=>{
                if(story.name.trim() === storyCT.name.trim()){
                    ArrayCT[i]=j
                }
            })
        })
        listStoryAuto.forEach((story,i)=>{
            story.onclick = function(e){
               _this.clickStory()
                listStorysSUB[ArrayCT[i]].classList.remove('active')
                
                e.preventDefault()
            }
        })
        // Khi next
        nextBtn.onclick = function (e){
            
            let i=[]
            i= ArrayCT.shift(0)
            ArrayCT.push(i)
            _this.nextStory()
            
            e.preventDefault()
            _this.render()
            const listStoryAuto = $$('.nomianations__list-item-story ')
            const listStorysSUB = $$('.container__nominationssub.active')
            // _this.rendercontainer()
            listStoryAuto.forEach((story,i)=>{
                story.onclick = function(e){
                   _this.clickStory()
                    listStorysSUB[ArrayCT[i]].classList.remove('active')

                    e.preventDefault()
                }
            })
            
        }
        prevBtn.onclick = function(e){
            let x=ArrayCT.length-1
            let y=[]
            y=ArrayCT.pop(x)
            ArrayCT.splice(0,0,y)
           _this.prevStory()
           _this.render()
            e.preventDefault()
            const listStoryAuto = $$('.nomianations__list-item-story ')
            const listStorysSUB = $$('.container__nominationssub.active')
            // _this.rendercontainer()
            listStoryAuto.forEach((story,i)=>{
                story.onclick = function(e){
                   _this.clickStory()
                    listStorysSUB[ArrayCT[i]].classList.remove('active')
                    
                    e.preventDefault()
                }
            })
        }
        // tu dong next
         setInterval(()=>
        nextBtn.click()
        ,3000)
        

       
       
    },
    handelEvent : function(){
        const _this = this
        
        // click HOT

        // Form dang ky
        DKBtn.onclick = function(e){
            _this.clickDK()
            e.preventDefault()
        }
        // Dang nhap
        DNBtn.onclick=function(e){
            _this.clickDN()
            e.preventDefault()
        }
        canel.forEach((canelIndex)=>{
            canelIndex.onclick = function(e){
                modal.classList.remove('active')
                e.preventDefault()
            }
        })
        var modal__overlayclick= 0;
        $('.modal__overlay').onclick = function(){
            modal__overlayclick++;
            if(modal__overlayclick>1){
                modal__overlayclick=0
                modal.classList.remove('active')
            }
        }
        
        // Submit DN
        submitDN.onclick = function(e){
            formDN.classList.add('active')
            formDK.classList.remove('active')
            e.preventDefault()
        }
        submitDK.onclick = function(e){
            formDK.classList.add('active')
            formDN.classList.remove('active')
            e.preventDefault()


        }
        
        // Top Story
        topBtns.forEach((topBtn,index)=>{
            var list__Top=list__Tops[index]
            topBtn.onclick= function(e){
                $('.container__nominations2-top-list.top-color').classList.remove('top-color')
                $('.list-top__story.active').classList.remove('active')

                this.classList.add('top-color')
                list__Top.classList.add('active')

                e.preventDefault()
            }
           
        })
        


        // search MB
        let xx=0
        iconsearchMB.onclick = function(e){
            xx++
            if(xx===1){
            $('.menuMB').classList.add('active')
            $('.menu-openMB').classList.add('active')
            
            }
            else{
                xx=0
                $('.menuMB').classList.remove('active')
                $('.menu-openMB').classList.remove('active')
            }
            $('.menu-list-openMB').classList.remove('active')
            $('.header__nav1-list-mb').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            e.preventDefault()
        }
        // List Mobile
        $('.header__nav1-list-mb').onclick = function(){
            xx=0
            $('.menu-list-openMB').classList.add('active')
            $('.header__nav1-list-mb').classList.add('active')
            $('.header__nav1-exit-mb').classList.remove('active')
            $('.menuMB').classList.add('active')
            $('.menu-openMB').classList.remove('active')
        }
        $('.header__nav1-exit-mb').onclick = function(){
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            $('.menuMB').classList.remove('active')
        }
        // DN MB
        $('.list-formMB-itemDN').onclick=function(e){
            
            $('.menuMB').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            _this.clickDN()
            e.preventDefault()
        }
        $('.list-formMB-itemDK').onclick=function(e){
            $('.menuMB').classList.remove('active')
            $('.header__nav1-exit-mb').classList.add('active')
            $('.header__nav1-list-mb').classList.remove('active')
            _this.clickDK()
            e.preventDefault()
        }
        // Khi keo main
            window.onscroll = function(){
                const scroll=document.documentElement.scrollTop||window.scrollY
                if(scroll>$('.header__1').offsetHeight){
                    $('.header__1').classList.add('active')
                    $('.header__2').classList.add('fixed')
                    $('.back-to__main').classList.add('active')
                }else{
                    $('.header__1').classList.remove('active')
                    $('.header__2').classList.remove('fixed')
                    $('.back-to__main').classList.remove('active')
                }
                $('.back-to__main').onclick = function(){
                    jQuery('html,body').animate({
                        scrollTop: 0
                    },1400);
                }
            }
        // contaiber
    },
    
    handelEventSUB : function(){
        
        const _this =this
        
        
     },
    clickDN : function(){
        modal.classList.add('active')
        formDN.classList.add('active')
        formDK.classList.remove('active')
    },
    clickDK : function(){
        modal.classList.add('active')
        formDK.classList.add('active')
        formDN.classList.remove('active')
    },
    nextStory : function(){
        let x = []
        x= this.storys.shift(0)
        this.storys.push(x)
        
    },
    
    prevStory : function(){
        let x=this.storys.length-1
        let y=[]
        y=this.storys.pop(x)
        this.storys.splice(0,0,y)
        
    },
    start : function(){
        this.handelEvent()

        this.handelEventSUB()

        this.handelEventStory()

        // this.render()

        this.biendoichuoi(123456789)
    }
}
app.start()