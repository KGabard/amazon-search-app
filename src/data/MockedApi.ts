export default function getSearchProducts() {
  const loading = false
  const error = false

  const data = {
    amazonProductSearchResults: {
      productResults: {
        pageInfo: {
          currentPage: 1,
          totalPages: 7,
          hasNextPage: true,
          hasPrevPage: false,
        },
        results: [
          {
            asin: 'B07TVV3CJK',
            price: {
              display: '$43.22',
            },
            title:
              'Amazon Basics Round Storage End Table, Side Table with Cloth Basket, Dusty Pink, 18"D x 19"W x 18"H',
            rating: 4.5,
            ratingsTotal: 8585,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71YVBO-qHkL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfYXRmOjIwMDAyNDA1NTMxOTQzMTo6MDo6&url=%2FAmazonBasics-Round-Storage-End-Table%2Fdp%2FB07TVV3CJK%2Fref%3Dsr_1_1_ffob_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
          },
          {
            asin: 'B00SY2RA7M',
            price: {
              display: '$26.88',
            },
            title: 'COSCO 20" x 48" Vinyl Top Folding Table, Black',
            rating: 4.6,
            ratingsTotal: 2817,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71-weo7iGtS._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfYXRmOjIwMDEyMjQ2MTE0ODM5ODo6MDo6&url=%2FCOSCO-Vinyl-Folding-Table-1-pack%2Fdp%2FB00SY2RA7M%2Fref%3Dsr_1_2_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-2-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
          },
          {
            asin: 'B07MB1WDP3',
            price: {
              display: '$59.99',
            },
            title:
              'Coleshome 47 Inch Computer Desk, Modern Simple Style Desk for Home Office, Study Student Writing Desk,Black',
            rating: 4.5,
            ratingsTotal: 24553,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71g-utLr1uL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfYXRmOjIwMDA4ODUzMTk5NDM5ODo6MDo6&url=%2FColeshome-Computer-Modern-Student-Writing%2Fdp%2FB07MB1WDP3%2Fref%3Dsr_1_3_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-3-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
          },
          {
            asin: 'B09XH2GMCX',
            price: {
              display: '$46.99',
            },
            title:
              'TOYSINTHEBOX Industrial Narrow End Table, Slim Table Nightstand Side Table with Fabric Drawer and Metal Frame for Living Room, Bedroom, Office (White Oak)',
            rating: 3.3,
            ratingsTotal: 3,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61YVxxDIc0L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfYXRmOjIwMDExNTQ1MDY5MjQ5ODo6MDo6&url=%2FIndustrial-Narrow-Nightstand-Fabric-Bedroom%2Fdp%2FB09XH2GMCX%2Fref%3Dsr_1_4_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-4-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1',
          },
          {
            asin: 'B00SY2RA7M',
            price: {
              display: '$26.88',
            },
            title: 'COSCO 20" x 48" Vinyl Top Folding Table, Black',
            rating: 4.6,
            ratingsTotal: 2817,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71-weo7iGtS._AC_UL400_.jpg',
            url: 'https://www.amazon.com/COSCO-Vinyl-Folding-Table-1-pack/dp/B00SY2RA7M/ref=sr_1_5?keywords=table&qid=1687267115&sr=8-5',
          },
          {
            asin: 'B07FL6D1Z8',
            price: {
              display: '$17.67',
            },
            title:
              'Furinno Just 3-Tier Turn-N-Tube End Table / Side Table / Night Stand / Bedside Table with Plastic Poles, 1-Pack, French Oak Grey/Black',
            rating: 4.4,
            ratingsTotal: 5872,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/716RUsUozWL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-11087GYW-BK-Turn-N-Tube-3-Tier/dp/B07FL6D1Z8/ref=sr_1_6?keywords=table&qid=1687267115&sr=8-6',
          },
          {
            asin: 'B0C58SLRF1',
            price: {
              display: '$34.65',
            },
            title:
              'Small Computer Desk Small Office Desk 31 Inch Writing Desk Home Office Desks Small Space Desk Study Table Modern Simple Style Work Table with Storage Bag and Iron Hook, Wooden Desk for Home, Bedroom',
            rating: 4.5,
            ratingsTotal: 155,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71hWBKwRtQL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Computer-Office-Writing-Storage-Bedroom/dp/B0C58SLRF1/ref=sr_1_7?keywords=table&qid=1687267115&sr=8-7',
          },
          {
            asin: 'B00E8SZ4MY',
            price: {
              display: '$40.40',
            },
            title:
              'Flash Furniture Madelyn Folding Card Table - Black Foldable Card Table Square - Portable Table with Collapsible Legs',
            rating: 4.6,
            ratingsTotal: 13364,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51nAyWCkJXL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDc2Nzk1MzEzNjQzNTE3OjE2ODcyNjcxMTU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDE3ODIxMzc1NTM5ODo6MDo6&url=%2FFlash-Furniture-Black-Folding-Table%2Fdp%2FB00E8SZ4MY%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%253Aamzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%26cv_ct_cx%3Dtable%26keywords%3Dtable%26pd_rd_i%3DB00E8SZ4MY%26pd_rd_r%3D9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b%26pd_rd_w%3DNm5nY%26pd_rd_wg%3DgdTpT%26pf_rd_p%3D749943ff-94bd-4679-8f03-3b5488f65fae%26pf_rd_r%3DVBZZWR3NPJ4NH0DEDBQ4%26qid%3D1687267115%26sr%3D1-1-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1',
          },
          {
            asin: 'B0BNMND6WP',
            price: {
              display: '$149.99',
            },
            title:
              'End Table Set of 2, Sofa Side Tables,Bedside Tables/Nightstands with Charging for Living Room,Bedroom,Office,Grey',
            rating: 4.5,
            ratingsTotal: 188,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71QWmmfNuwL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDc2Nzk1MzEzNjQzNTE3OjE2ODcyNjcxMTU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDE1MTk4NDgzNjE5ODo6MTo6&url=%2FSJIE-Bedside-Nightstands-Charging-Bedroom%2Fdp%2FB0BNMND6WP%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%253Aamzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%26cv_ct_cx%3Dtable%26keywords%3Dtable%26pd_rd_i%3DB0BNMND6WP%26pd_rd_r%3D9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b%26pd_rd_w%3DNm5nY%26pd_rd_wg%3DgdTpT%26pf_rd_p%3D749943ff-94bd-4679-8f03-3b5488f65fae%26pf_rd_r%3DVBZZWR3NPJ4NH0DEDBQ4%26qid%3D1687267115%26sr%3D1-2-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1',
          },
          {
            asin: 'B08YWYVTS4',
            price: {
              display: '$59.87',
            },
            title: 'SHW Home Office 40-Inch Computer Desk, Black',
            rating: 4.6,
            ratingsTotal: 23043,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/810yvdFlVOL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDc2Nzk1MzEzNjQzNTE3OjE2ODcyNjcxMTU6c3Bfc2VhcmNoX3RoZW1hdGljOjMwMDAwMDQ3ODE1ODcwMjo6Mjo6&url=%2FSHW-Office-40-Inch-Computer-Black%2Fdp%2FB08YWYVTS4%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%253Aamzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%26cv_ct_cx%3Dtable%26keywords%3Dtable%26pd_rd_i%3DB08YWYVTS4%26pd_rd_r%3D9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b%26pd_rd_w%3DNm5nY%26pd_rd_wg%3DgdTpT%26pf_rd_p%3D749943ff-94bd-4679-8f03-3b5488f65fae%26pf_rd_r%3DVBZZWR3NPJ4NH0DEDBQ4%26qid%3D1687267115%26sr%3D1-3-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1',
          },
          {
            asin: 'B07RLSP3S6',
            price: {
              display: '$129.99',
            },
            title:
              'Decoholic Computer Desk 55 Inch Modern Simple Large Study Writing Desk Industrial Style Laptop PC Table for Home Office, Sandalwood Board Black Leg',
            rating: 4.3,
            ratingsTotal: 409,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/518Dn92hfML._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDc2Nzk1MzEzNjQzNTE3OjE2ODcyNjcxMTU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDExMDUwNTk2MTE5ODo6Mzo6&url=%2FDECOHOLIC-Computer-Writing-Industrial-Sandalwood%2Fdp%2FB07RLSP3S6%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%253Aamzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%26cv_ct_cx%3Dtable%26keywords%3Dtable%26pd_rd_i%3DB07RLSP3S6%26pd_rd_r%3D9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b%26pd_rd_w%3DNm5nY%26pd_rd_wg%3DgdTpT%26pf_rd_p%3D749943ff-94bd-4679-8f03-3b5488f65fae%26pf_rd_r%3DVBZZWR3NPJ4NH0DEDBQ4%26qid%3D1687267115%26sr%3D1-4-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1',
          },
          {
            asin: 'B07QZW5D4D',
            price: {
              display: '$75.99',
            },
            title:
              'Need Small Desk, 39.4 inches Sturdy Writing Desk for Small Spaces, Small Computer Desk Teens Desk Study Table Laptop Desk Home Ofice Desk, Black Metal Frame, Teak',
            rating: 4.6,
            ratingsTotal: 6340,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61k4OsowezL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MTo3NDc2Nzk1MzEzNjQzNTE3OjE2ODcyNjcxMTU6c3Bfc2VhcmNoX3RoZW1hdGljOjIwMDE2NzU3OTE0NjI5ODo6NDo6&url=%2FNeed-Computer-inches-Writing-AC3-10060-BB%2Fdp%2FB07QZW5D4D%2Fref%3Dsxin_17_pa_sp_search_thematic_sspa%3Fcontent-id%3Damzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%253Aamzn1.sym.749943ff-94bd-4679-8f03-3b5488f65fae%26cv_ct_cx%3Dtable%26keywords%3Dtable%26pd_rd_i%3DB07QZW5D4D%26pd_rd_r%3D9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b%26pd_rd_w%3DNm5nY%26pd_rd_wg%3DgdTpT%26pf_rd_p%3D749943ff-94bd-4679-8f03-3b5488f65fae%26pf_rd_r%3DVBZZWR3NPJ4NH0DEDBQ4%26qid%3D1687267115%26sr%3D1-5-2b34d040-5c83-4b7f-ba01-15975dfb8828-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM%26psc%3D1',
          },
          {
            asin: 'B06XZV3F8F',
            price: {
              display: '$59.98',
            },
            title:
              'Coavas Folding Desk No Assembly Required, 39.4 inch Writing Computer Desk Space Saving Foldable Table Simple Home Office Desk,Brown',
            rating: 4.7,
            ratingsTotal: 26376,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71TVa-V3eNL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Writing-Computer-Industrial-Folding-Notebook/dp/B06XZV3F8F/ref=sxin_19_trfobq2av2_0_B06XZV3F8F?content-id=amzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12%3Aamzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12&cv_ct_cx=table&keywords=table&pd_rd_i=B06XZV3F8F&pd_rd_r=9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b&pd_rd_w=s09b1&pd_rd_wg=gdTpT&pf_rd_p=79842a2a-53be-45c4-a804-66adbba06d12&pf_rd_r=VBZZWR3NPJ4NH0DEDBQ4&qid=1687267115&sr=1-1-1dd8b2a9-7225-45f8-8f6b-c6a5d8937909',
          },
          {
            asin: 'B07MKQGJSW',
            price: {
              display: '$47.39',
            },
            title:
              'Amazon Basics Classic TV Dinner Folding Trays with Storage Rack - Set of 4, Natural',
            rating: 4.4,
            ratingsTotal: 22698,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81sLmjFsLrL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/AmazonBasics-Classic-Dinner-Snack-Table/dp/B07MKQGJSW/ref=sxin_19_trfobq2av2_1_B07MKQGJSW?content-id=amzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12%3Aamzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12&cv_ct_cx=table&keywords=table&pd_rd_i=B07MKQGJSW&pd_rd_r=9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b&pd_rd_w=s09b1&pd_rd_wg=gdTpT&pf_rd_p=79842a2a-53be-45c4-a804-66adbba06d12&pf_rd_r=VBZZWR3NPJ4NH0DEDBQ4&qid=1687267115&sr=1-2-1dd8b2a9-7225-45f8-8f6b-c6a5d8937909',
          },
          {
            asin: 'B07TTTG49V',
            price: {
              display: '$53.39',
            },
            title:
              'Amazon Basics Round Storage End Table, Side Table with Cloth Basket, Charcoal/Heather Gray, 18 in x 18 in x 19 in',
            rating: 4.5,
            ratingsTotal: 8585,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81Z9Xn8xiqL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/AmazonBasics-Round-Storage-End-Table/dp/B07TTTG49V/ref=sxin_19_trfobq2av2_2_B07TTTG49V?content-id=amzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12%3Aamzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12&cv_ct_cx=table&keywords=table&pd_rd_i=B07TTTG49V&pd_rd_r=9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b&pd_rd_w=s09b1&pd_rd_wg=gdTpT&pf_rd_p=79842a2a-53be-45c4-a804-66adbba06d12&pf_rd_r=VBZZWR3NPJ4NH0DEDBQ4&qid=1687267115&sr=1-3-1dd8b2a9-7225-45f8-8f6b-c6a5d8937909',
          },
          {
            asin: 'B07HGKLLQC',
            price: {
              display: '$132.98',
            },
            title:
              'Amazon Basics 24 x 48 Inch Rectangular School Activity Kids Table, Ball Glide Legs, Adjustable Height 19-30 Inch, Grey and Black',
            rating: 4.4,
            ratingsTotal: 580,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71kQgMdfAGL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/AmazonBasics-Rectangular-School-Activity-Adjustable/dp/B07HGKLLQC/ref=sxin_19_trfobq2av2_3_B07HGKLLQC?content-id=amzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12%3Aamzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12&cv_ct_cx=table&keywords=table&pd_rd_i=B07HGKLLQC&pd_rd_r=9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b&pd_rd_w=s09b1&pd_rd_wg=gdTpT&pf_rd_p=79842a2a-53be-45c4-a804-66adbba06d12&pf_rd_r=VBZZWR3NPJ4NH0DEDBQ4&qid=1687267115&sr=1-4-1dd8b2a9-7225-45f8-8f6b-c6a5d8937909',
          },
          {
            asin: 'B01MXKMRK4',
            price: {
              display: '$140.24',
            },
            title:
              'Amazon Brand - Ameriwood Home Rectangular Candon Writing Desk With 1 Drawer, Distressed Oak, Medium Brown, 19.5 in x 45 in x 30.1 in',
            rating: 4.4,
            ratingsTotal: 746,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71WHgZp1ehL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Ameriwood-Home-Candon-Distressed-Brown/dp/B01MXKMRK4/ref=sxin_19_trfobq2av2_4_B01MXKMRK4?content-id=amzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12%3Aamzn1.sym.79842a2a-53be-45c4-a804-66adbba06d12&cv_ct_cx=table&keywords=table&pd_rd_i=B01MXKMRK4&pd_rd_r=9b0bb2ba-6bd7-4be4-9904-f1ff10504e9b&pd_rd_w=s09b1&pd_rd_wg=gdTpT&pf_rd_p=79842a2a-53be-45c4-a804-66adbba06d12&pf_rd_r=VBZZWR3NPJ4NH0DEDBQ4&qid=1687267115&sr=1-5-1dd8b2a9-7225-45f8-8f6b-c6a5d8937909',
          },
          {
            asin: 'B075F9KPQH',
            price: {
              display: '$54.00',
            },
            title:
              'ZINUS Jennifer 55 Inch Black Frame Desk / Computer Workstation / Office Desk / Easy Assembly, Deep Espresso',
            rating: 4.7,
            ratingsTotal: 9978,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81dS3mqWnnL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Zinus-Jennifer-Collection-Rectangular-Computer/dp/B075F9KPQH/ref=sr_1_8?keywords=table&qid=1687267115&sr=8-8',
          },
          {
            asin: 'B01CZUU8LI',
            price: {
              display: '$49.00',
            },
            title:
              'Convenience Concepts Oxford Console Table with Shelf, Espresso',
            rating: 4.6,
            ratingsTotal: 8401,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71MAqF4hauL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Convenience-Concepts-Oxford-Console-Espresso/dp/B01CZUU8LI/ref=sr_1_9?keywords=table&qid=1687267115&sr=8-9',
          },
          {
            asin: 'B0BVQG7TXY',
            price: {
              display: '$39.87',
            },
            title:
              'ODK 32 inch Small Computer Desk Study Table for Small Spaces Home Office Student Laptop PC Writing Desks with Storage Bag Headphone Hook, Espresso Gray',
            rating: 4.4,
            ratingsTotal: 12065,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71VKUXjbW8L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/ODK-Computer-Student-Headphone-Espresso/dp/B0BVQG7TXY/ref=sr_1_10?keywords=table&qid=1687267115&sr=8-10',
          },
          {
            asin: 'B0BJF2LBJZ',
            price: {
              display: '$22.99',
            },
            title:
              'Acehome Side Table, 3-Tier End Table with Storage, 23.3" Small Side Table for Small Spaces, Industrial End Table for Living Room, Bedroom and Balcony, Stable Metal Frame-Retro',
            rating: 4.4,
            ratingsTotal: 29,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71M32X-ZCeL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjMwMDAwMDA5NzAzODkwMjo6MDo6&url=%2FAcehome-Side-Table-Industrial-Frame-Retro%2Fdp%2FB0BJF2LBJZ%2Fref%3Dsr_1_11_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-11-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B0BNQB4W5R',
            price: {
              display: '$69.99',
            },
            title:
              'COTUBLR Console Table with Outlets, Entryway Table with Mesh Shelves, 39 inch Industrial Sofa Table for Living Room, Entry Table for Entryway, Hallway, Foyer, Kitchen, Grey Oak',
            rating: 4,
            ratingsTotal: 18,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81Sj7W8BDcL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDEyOTk3MzA0OTQ5ODo6MDo6&url=%2FCOTUBLR-Console-Outlets-Entryway-Industrial%2Fdp%2FB0BNQB4W5R%2Fref%3Dsr_1_12_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-12-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B0BMPL248P',
            price: {
              display: '$72.99',
            },
            title:
              'Amyove Square Nightstand, Bedside Table End Table for Bedroom Nursery Living Room, End Table with Storage Drawer, Easy Assembly, Grey',
            rating: 3.3,
            ratingsTotal: 10,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81iOYlVZzHL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDEwNTMxMzEzMzc5ODo6MDo6&url=%2FAmyove-Nightstand-Bedside-Bedroom-Assembly%2Fdp%2FB0BMPL248P%2Fref%3Dsr_1_13_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-13-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B09P3WPWP7',
            price: {
              display: '$100.18',
            },
            title:
              "Ecoprsio Entryway Table with Outlets and USB Ports, Console Table with 2 Drawers, Sofa Table Narrow Long with Storage Shelves for Living Room, Couch, Hallway, Foyer, Kitchen Counter, 32'', Grey",
            rating: 4.6,
            ratingsTotal: 1321,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/715VTivNJ1L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDE2MDY5MDY5MDM5ODo6MDo6&url=%2FEcopriso-Entryway-Outlets-Console-Drawers%2Fdp%2FB09P3WPWP7%2Fref%3Dsr_1_14_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-14-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B09F31LY6D',
            price: {
              display: '$24.99',
            },
            title:
              "PayLessHere Computer Desk 47'', Modern Writing Desk, Simple Study Table, Industrial Office Desk, Sturdy Laptop Table for Home Office, Nature",
            rating: 4.6,
            ratingsTotal: 809,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71O1C+R6qtL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Computer-Desk-47-Writing-Industrial/dp/B09F31LY6D/ref=sr_1_15?keywords=table&qid=1687267115&sr=8-15',
          },
          {
            asin: 'B00NIYX9LC',
            price: {
              display: '$27.59',
            },
            title: 'FURINNO Simplistic Study Table, Espresso',
            rating: 4.1,
            ratingsTotal: 15471,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51ZEw4QTV7L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-14035EX-Study-Table-Espresso/dp/B00NIYX9LC/ref=sr_1_16?keywords=table&qid=1687267115&sr=8-16',
          },
          {
            asin: 'B08GCLLRKM',
            price: {
              display: '$30.05',
            },
            title:
              'AZL1 Life Concept Console Table, Sofa Table for Living Room，Hallway，Entryway, Entrance Hall, Corridor - Wood Look Metal Frame',
            rating: 4.5,
            ratingsTotal: 335,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51a1jv4GC7S._AC_UL400_.jpg',
            url: 'https://www.amazon.com/AZ-L1-Life-Concept-AZ200248/dp/B08GCLLRKM/ref=sr_1_17?keywords=table&qid=1687267115&sr=8-17',
          },
          {
            asin: 'B086Z7LFBB',
            price: {
              display: '$19.00',
            },
            title: 'Honey-Can-Do C End Table TBL-08725 Black',
            rating: 4.6,
            ratingsTotal: 2020,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71GMTvaBDEL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Honey-Can-Do-TBL-08725-C-End-Table/dp/B086Z7LFBB/ref=sr_1_18?keywords=table&qid=1687267115&sr=8-18',
          },
          {
            asin: 'B0BWN7DW7V',
            price: {
              display: '$199.99',
            },
            title:
              'Tribesigns 6FT Conference Table, 70.86 L x 31.49 W x 29.52 H Inches Rectangle Meeting Room Table, Rustic Wood Seminar Table Executive Desk for Office, Conference Room',
            rating: null,
            ratingsTotal: null,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81CRZl7ukEL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDEzMjM1MzcwNzE5ODo6MDo6&url=%2FTribesigns-Conference-Rectangle-Meeting-Executive%2Fdp%2FB0BWN7DW7V%2Fref%3Dsr_1_19_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-19-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B08YWYVTS4',
            price: {
              display: '$59.87',
            },
            title: 'SHW Home Office 40-Inch Computer Desk, Black',
            rating: 4.6,
            ratingsTotal: 23043,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/810yvdFlVOL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjMwMDAwMDQ3ODE1ODcwMjo6MDo6&url=%2FSHW-Office-40-Inch-Computer-Black%2Fdp%2FB08YWYVTS4%2Fref%3Dsr_1_20_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-20-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B07QZW5D4D',
            price: {
              display: '$75.99',
            },
            title:
              'Need Small Desk, 39.4 inches Sturdy Writing Desk for Small Spaces, Small Computer Desk Teens Desk Study Table Laptop Desk Home Ofice Desk, Black Metal Frame, Teak',
            rating: 4.6,
            ratingsTotal: 6340,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61k4OsowezL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDE2NzU3OTE0NjI5ODo6MDo6&url=%2FNeed-Computer-inches-Writing-AC3-10060-BB%2Fdp%2FB07QZW5D4D%2Fref%3Dsr_1_21_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-21-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B0B28RFXNQ',
            price: {
              display: '$79.99',
            },
            title:
              'Homieasy End Table with Charging Station, 20 Inch Square Side Table with USB Ports & Power Outlets, Black Nightstand with 2-Tier Storage Shelf, Mini Fridge Stand for Small Spaces, Black',
            rating: 4.7,
            ratingsTotal: 280,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61myXaERj7L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/sspa/click?ie=UTF8&spc=MToyNzc0MzMwMDk1NTA1NjgwOjE2ODcyNjcxMTU6c3BfbXRmOjIwMDE2NTc3ODQwODc5ODo6MDo6&url=%2FHomieasy-Charging-Station-Outlets-Nightstand%2Fdp%2FB0B28RFXNQ%2Fref%3Dsr_1_22_sspa%3Fkeywords%3Dtable%26qid%3D1687267115%26sr%3D8-22-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9tdGY%26psc%3D1',
          },
          {
            asin: 'B001D25TJQ',
            price: {
              display: '$70.59',
            },
            title: 'Cosco Folding Table, 6 Foot, White',
            rating: 4.7,
            ratingsTotal: 16800,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/31E8N6qsyoL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Cosco-Deluxe-Molded-Folding-Speckle/dp/B001D25TJQ/ref=sr_1_23?keywords=table&qid=1687267115&sr=8-23',
          },
          {
            asin: 'B09SB6LHS1',
            price: {
              display: '$39.99',
            },
            title:
              '35/39/47 Inch Computer Desk Home Office Desk Writing Study Table Modern Simple Style PC Desk with Metal Frame Gaming Desk Workstation for Small Space (Vintage, 39 inch)',
            rating: 4.5,
            ratingsTotal: 163,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61-+sl0MtdL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Computer-Desk-Home-Office-Multi-Function/dp/B09SB6LHS1/ref=sr_1_24?keywords=table&qid=1687267115&sr=8-24',
          },
          {
            asin: 'B09HJFV688',
            price: {
              display: '$49.87',
            },
            title: 'SHW Home Office 32-Inch Computer Desk, Black',
            rating: 4.6,
            ratingsTotal: 23043,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/411kGNBQ4AL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/SHW-Office-32-Inch-Computer-Black/dp/B09HJFV688/ref=sr_1_25?keywords=table&qid=1687267115&sr=8-25',
          },
          {
            asin: 'B0BYDFF12T',
            price: {
              display: '$23.99',
            },
            title:
              'Fixwal Side Table End Table 3 Tier White Nightstand Small Bookshelf Bookcase for Small Spaces, Bedroom, Living Room, Bathroom, Office, Dorms',
            rating: 3.8,
            ratingsTotal: 56,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61OW0abpLwL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Fixwal-Nightstand-Bookshelf-Bookcase-Bathroom/dp/B0BYDFF12T/ref=sr_1_26?keywords=table&qid=1687267115&sr=8-26',
          },
          {
            asin: 'B0C2YZ4NMC',
            price: {
              display: 'Join Prime to buy this item at $23.99',
            },
            title:
              'End Table Nightstands Set of 2, 3-Tier Bedside Tables, Nightstand Accent Table for Couch, 5-Tier Shelf Bookcase, Living Room, Bedroom, Rustic Brown and Black, Easy Assembly.',
            rating: 5,
            ratingsTotal: 1,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61qbI0eGZYL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/MINOSYS-Nightstands-Nightstand-Bookcase-Assembly/dp/B0C2YZ4NMC/ref=sr_1_27?keywords=table&qid=1687267115&sr=8-27',
          },
          {
            asin: 'B09FJJJ2S5',
            price: {
              display: '$79.99',
            },
            title:
              'LIDYUK End Table with Charging Station, Flip Top Side Table with USB Ports and Outlets, Nightstand for Small Spaces, Bedside Tables with Storage Shelf for Living Room, Bedroom, Brown',
            rating: 4.6,
            ratingsTotal: 1993,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71Wdu7uxrDL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/LIDYUK-Charging-Station-Outlets-Nightstand/dp/B09FJJJ2S5/ref=sr_1_28?keywords=table&qid=1687267115&sr=8-28',
          },
          {
            asin: 'B08DRQ618K',
            price: {
              display: '$64.99',
            },
            title:
              'RIF6 L-Shaped Computer Desk - 59.4" Home Office Corner Desk with Adjustable Keyboard Tray - Durable Black Surface Study Table for PC Laptop Gaming and Writing - with Sturdy Adjustable Steel Legs',
            rating: 4.6,
            ratingsTotal: 1176,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61iSOJBAfCL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/RIF6-L-Shaped-Computer-Desk-Adjustable/dp/B08DRQ618K/ref=sr_1_29?keywords=table&qid=1687267115&sr=8-29',
          },
          {
            asin: 'B08XQ4FQTP',
            price: {
              display: '$69.99',
            },
            title:
              'Homall L Shaped Gaming Desk Computer Corner Desk PC Gaming Desk Table with Large Monitor Riser Stand for Home Office Sturdy Writing Workstation (Black, 51 Inch)',
            rating: 4.5,
            ratingsTotal: 5215,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71duv9a2mqL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Homall-Computer-Monitor-Writing-Workstation/dp/B08XQ4FQTP/ref=sr_1_30?keywords=table&qid=1687267115&sr=8-30',
          },
          {
            asin: 'B00IZCW4Q8',
            price: {
              display: '$22.96',
            },
            title: 'Furinno Simple Design Coffee Table, Dark Brown',
            rating: 4.1,
            ratingsTotal: 14507,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51SkB6VtgDL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-11179DBR-Simple-Design-Coffee/dp/B00IZCW4Q8/ref=sr_1_31?keywords=table&qid=1687267115&sr=8-31',
          },
          {
            asin: 'B083FPLNM7',
            price: {
              display: '$12.03',
            },
            title:
              'Furinno Turn-N-Tube Tall End Table, French Oak Grey/Black/Black',
            rating: 4.3,
            ratingsTotal: 7125,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71EVaAZkdqL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/FURINNO-Turn-N-Tube-Table-French-Black/dp/B083FPLNM7/ref=sr_1_32?keywords=table&qid=1687267115&sr=8-32',
          },
          {
            asin: 'B0C33J219X',
            price: {
              display: '$59.99',
            },
            title:
              'Desk Computer Desk with Shelves, Home Office Desks Table 47 Inch PC Desk Bedroom Desk Work Desk Study Desk Wood Desk with Storage Removable Middle Shelf for Dorm, Student, Gaming',
            rating: 4.4,
            ratingsTotal: 46,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61NHVTEYzzL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Computer-Shelves-Bedroom-Storage-Removable/dp/B0C33J219X/ref=sr_1_33?keywords=table&qid=1687267115&sr=8-33',
          },
          {
            asin: 'B01K6PLW4Q',
            price: {
              display: '$49.00',
            },
            title:
              'Sauder North Avenue Coffee Table, Charter Oak finish, L: 31.50" x W: 20.00" x H: 16.54"',
            rating: 4.5,
            ratingsTotal: 5591,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71Z+TfZ9n8L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Sauder-420275-North-Avenue-Coffee/dp/B01K6PLW4Q/ref=sr_1_34?keywords=table&qid=1687267115&sr=8-34',
          },
          {
            asin: 'B08XX3V5DD',
            price: {
              display: '$30.96',
            },
            title:
              'Furinno Modern Simplistic Criss-Crossed Coffee Table, 35.4 in x 19.6 in x 16 in, French Oak Grey',
            rating: 3.4,
            ratingsTotal: 2366,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51mzdHOFD8L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-Modern-Simplistic-Criss-Crossed-Coffee/dp/B08XX3V5DD/ref=sr_1_35?keywords=table&qid=1687267115&sr=8-35',
          },
          {
            asin: 'B00OR1KMRO',
            price: {
              display: '$30.10',
            },
            title: 'Furinno Simplistic a Frame Computer Desk, Espresso',
            rating: 4,
            ratingsTotal: 29995,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/41kCm-cl6sL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-14054EX-Simplistic-Computer-Espresso/dp/B00OR1KMRO/ref=sr_1_36?keywords=table&qid=1687267115&sr=8-36',
          },
          {
            asin: 'B07FKRG3YN',
            price: {
              display: '$14.60',
            },
            title:
              'Furinno Andrey End Table / Side Table / Night Stand / Bedside Table with Bin Drawer, Columbia Walnut/Dark Brown',
            rating: 4.1,
            ratingsTotal: 54269,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51Y+n3kZ7OL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/FURINNO-Andrey-Nightstand-Drawer-1-Pack/dp/B07FKRG3YN/ref=sr_1_37?keywords=table&qid=1687267115&sr=8-37',
          },
          {
            asin: 'B0BMG3S4VQ',
            price: {
              display: '$159.99',
            },
            title:
              'Modern Round Dining Table,31.5" Mid Century Modern Style Dining Table Tulip Kitchen Table with MDF Top and Steel Pedestal,Bar Patio Bistro Table for Kitchen,Dining,Bedroom,Living Room,White',
            rating: 4.1,
            ratingsTotal: 40,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51Dth7BXNiL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/linstock-Century-Kitchen-Pedestal-Bedroom/dp/B0BMG3S4VQ/ref=sr_1_38?keywords=table&qid=1687267115&sr=8-38',
          },
          {
            asin: 'B0BZVX58WF',
            price: {
              display: '$74.99',
            },
            title:
              'Lufeiya White Small Desk with Drawers - 40 Inch Computer Desk for Small Space Home Office, Modern Simple Study Writing Table PC Desks',
            rating: null,
            ratingsTotal: null,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/619oCRzE40L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Lufeiya-White-Small-Desk-Drawers/dp/B0BZVX58WF/ref=sr_1_39?keywords=table&qid=1687267115&sr=8-39',
          },
          {
            asin: 'B084VHPPTC',
            price: {
              display: '$54.99',
            },
            title:
              'CubiCubi Study Computer Desk 32" Home Office Writing Small Desk, Modern Simple Style PC Table, Black Metal Frame, Rustic Brown',
            rating: 4.7,
            ratingsTotal: 42013,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71ay+nkdz8L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/CubiCubi-Computer-Writing-Office-Industrial/dp/B084VHPPTC/ref=sr_1_40?keywords=table&qid=1687267115&sr=8-40',
          },
          {
            asin: 'B09H2NZ2JW',
            price: {
              display: '$45.99',
            },
            title:
              'Bonzy Home Computer Desk with 3 Tiers Shelf, 48" Home Office Desk with Hutch Modern Writing Table Workstation, Brown',
            rating: 4.6,
            ratingsTotal: 29,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/91QwedyTdQL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Bonzy-Home-Computer-Storage-Shelves/dp/B09H2NZ2JW/ref=sr_1_41?keywords=table&qid=1687267115&sr=8-41',
          },
          {
            asin: 'B08FJFXPT8',
            price: {
              display: '$40.42',
            },
            title:
              'ROCKPOINT End Table with Industrial Style Drawer, Grey Wash',
            rating: 4.4,
            ratingsTotal: 426,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81q7cJI9LZL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/ROCKPOINT-Table-Industrial-Style-Drawer/dp/B08FJFXPT8/ref=sr_1_42?keywords=table&qid=1687267115&sr=8-42',
          },
          {
            asin: 'B0BJDR28S7',
            price: {
              display: '$22.99',
            },
            title:
              'ECOMEX 3-Tier End Tables,Side Table with Storage Shelf for Living Room, Small Bedside Table for Bedroom,Rustic Brown',
            rating: 4.4,
            ratingsTotal: 29,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71M32X-ZCeL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/ECOMEX-3-Tier-Storage-Bedside-Bedroom/dp/B0BJDR28S7/ref=sr_1_43?keywords=table&qid=1687267115&sr=8-43',
          },
          {
            asin: 'B0C5M9VKHT',
            price: {
              display: '$118.86',
            },
            title:
              'BANTI 55"x24" Standing Desk, Electric Stand up Height Adjustable Home Office Table, Sit Stand Desk, Light Rustic Brown Top',
            rating: 4.7,
            ratingsTotal: 71,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/715nXB4AqvL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/BANTI-Standing-Electric-Height-Adjustable/dp/B0C5M9VKHT/ref=sr_1_44?keywords=table&qid=1687267115&sr=8-44',
          },
          {
            asin: 'B0989DQJ9L',
            price: {
              display: '$59.99',
            },
            title:
              'Tajsoon Console Table, Industrial entryway Table, Narrow Sofa Table with Shelves,Entrance Table for Entryway, Hallway, Living Room, Foyer, Corridor, Office, Rustic Brown and Black',
            rating: 4.5,
            ratingsTotal: 1266,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/814rUarzH8L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Tajsoon-Industrial-entryway-Entrance-Entryway/dp/B0989DQJ9L/ref=sr_1_45?keywords=table&qid=1687267115&sr=8-45',
          },
          {
            asin: 'B0BWJKZ6L2',
            price: {
              display: '$69.99',
            },
            title:
              'Coleshome 48 Inch Computer Desk, Modern Simple Style Desk for Home Office, Study Student Writing Desk, Vintage',
            rating: 4.5,
            ratingsTotal: 24553,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71TjagU8AhL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Coleshome-Computer-Student-Writing-Vintage/dp/B0BWJKZ6L2/ref=sr_1_46?keywords=table&qid=1687267115&sr=8-46',
          },
          {
            asin: 'B005QLJL76',
            price: {
              display: '$29.00',
            },
            title: 'DHP Rosewood Tall End Table',
            rating: 4.5,
            ratingsTotal: 6140,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61V2LZEv+DL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/DHP-Rosewood-Simple-Design-Multi-purpose/dp/B005QLJL76/ref=sr_1_47?keywords=table&qid=1687267115&sr=8-47',
          },
          {
            asin: 'B01I5ZLJ3I',
            price: {
              display: '$29.30',
            },
            title:
              'ZINUS Dane 20 Inch Black Frame Side Table / End Table / Easy Assembly, Rich black wood grain (Espresso)',
            rating: 4.5,
            ratingsTotal: 8383,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/813E8EAzv2L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Zinus-Modern-Studio-Collection-Espresso/dp/B01I5ZLJ3I/ref=sr_1_48?keywords=table&qid=1687267115&sr=8-48',
          },
          {
            asin: 'B0006D50RO',
            price: {
              display: '$43.99',
            },
            title:
              'Lifetime 28241 Adjustable Folding Laptop Table TV Tray, 30 inch, White Granite',
            rating: 4.8,
            ratingsTotal: 5283,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61bvzrSqJJL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Lifetime-28241-Adjustable-Folding-Granite/dp/B0006D50RO/ref=sr_1_49?keywords=table&qid=1687267115&sr=8-49',
          },
          {
            asin: 'B0BTNRY94Z',
            price: {
              display: '$69.99',
            },
            title:
              'ODK L Shaped Gaming Desk, 51 Inch Computer Desk with Monitor Stand, PC Gaming Desk, Corner Desk Table for Home Office Sturdy Writing Workstation, Carbon Fiber Surface, Black',
            rating: 4.6,
            ratingsTotal: 64,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71yZ49lg6NL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/ODK-Computer-Monitor-Writing-Workstation/dp/B0BTNRY94Z/ref=sr_1_50?keywords=table&qid=1687267115&sr=8-50',
          },
          {
            asin: 'B0C4PD2LTF',
            price: {
              display: '$47.43',
            },
            title:
              'Computer Desk - 40 Inch Office Desk, Black Desk with Storage and Hooks, Wood Writing Desk for Bedroom, Work Desk for Home Office, PC Table Desk',
            rating: 4.7,
            ratingsTotal: 58,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71Qy7WcKLGL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Computer-Desk-Storage-Writing-Bedroom/dp/B0C4PD2LTF/ref=sr_1_51?keywords=table&qid=1687267115&sr=8-51',
          },
          {
            asin: 'B075PYBGKK',
            price: {
              display: '$24.60',
            },
            title: 'Furinno Simplistic Set of 2 End Table, Dark Walnut',
            rating: 4.3,
            ratingsTotal: 40683,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71T-btJHA4L._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-12127DWN-Simplistic-Table-Walnut/dp/B075PYBGKK/ref=sr_1_52?keywords=table&qid=1687267115&sr=8-52',
          },
          {
            asin: 'B097ZRJPK2',
            price: {
              display: '$36.99',
            },
            title:
              'FDW Folding Tables, Plastic 6ft Folding Table,Half Portable Foldable Table for Parties, Backyard Events,White',
            rating: 4.4,
            ratingsTotal: 1322,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/613fPIOWFIL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Folding-Tables-Portable-Foldable-Backyard/dp/B097ZRJPK2/ref=sr_1_53?keywords=table&qid=1687267115&sr=8-53',
          },
          {
            asin: 'B0C683VJK3',
            price: {
              display: '$69.99',
            },
            title:
              'Sweetcrispy Coffee Table, Lift Top Coffee Tables for Living Room,Rising Tabletop Wood Dining Center Tables with Storage Shelf and Hidden Compartment, Black',
            rating: 4.5,
            ratingsTotal: 90,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71ExrfUVAnL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Sweetcrispy-Coffee-Tabletop-Storage-Compartment/dp/B0C683VJK3/ref=sr_1_54?keywords=table&qid=1687267115&sr=8-54',
          },
          {
            asin: 'B00E8SZ4MY',
            price: {
              display: '$40.40',
            },
            title:
              'Flash Furniture Madelyn Folding Card Table - Black Foldable Card Table Square - Portable Table with Collapsible Legs',
            rating: 4.6,
            ratingsTotal: 13364,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51nAyWCkJXL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Flash-Furniture-Black-Folding-Table/dp/B00E8SZ4MY/ref=sr_1_55?keywords=table&qid=1687267115&sr=8-55',
          },
          {
            asin: 'B01KKHRNM0',
            price: {
              display: '$39.00',
            },
            title:
              'Baby Relax DA7501G Hunter 3 Piece Kiddy Table and Chair Set, Gray',
            rating: 4.5,
            ratingsTotal: 11633,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/81RSomQh4wL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Baby-Relax-Hunter-Piece-Kiddy/dp/B01KKHRNM0/ref=sr_1_56?keywords=table&qid=1687267115&sr=8-56',
          },
          {
            asin: 'B006321J8G',
            price: {
              display: '$20.38',
            },
            title:
              'Furinno 11172 Just 2-Tier No Tools Coffee Table, White w/White Tube',
            rating: 3.6,
            ratingsTotal: 10491,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/41h4UzOfBYL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-11172-2-Tier-Tools-Coffee/dp/B006321J8G/ref=sr_1_57?keywords=table&qid=1687267115&sr=8-57',
          },
          {
            asin: 'B07H4SJHDX',
            price: null,
            title: 'The Table',
            rating: 4.3,
            ratingsTotal: 8,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/61zwKD2cTIL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Table-Jung-Yu-mi/dp/B07H4SJHDX/ref=sr_1_58?keywords=table&qid=1687267115&sr=8-58',
          },
          {
            asin: 'B003VP10PK',
            price: {
              display: '$16.82',
            },
            title: 'Furinno Simple Design End/SideTable, Espresso',
            rating: 4.4,
            ratingsTotal: 10552,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/51s0FECr-BL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/Furinno-11180EX-Simple-SideTable-Espresso/dp/B003VP10PK/ref=sr_1_59?keywords=table&qid=1687267115&sr=8-59',
          },
          {
            asin: 'B07F1PSDR5',
            price: {
              display: '$86.99',
            },
            title:
              'FORUP 6ft Table, Folding Utility Table, Fold-in-Half Portable Plastic Picnic Party Dining Camp Table (White)',
            rating: 4.5,
            ratingsTotal: 1710,
            mainImageUrl:
              'https://m.media-amazon.com/images/I/71tQVjosNdL._AC_UL400_.jpg',
            url: 'https://www.amazon.com/SHELVING-SOLUTION-Folding-Utility-Portable/dp/B07F1PSDR5/ref=sr_1_60?keywords=table&qid=1687267115&sr=8-60',
          },
        ],
      },
    },
  }

  return { data, loading, error }
}
