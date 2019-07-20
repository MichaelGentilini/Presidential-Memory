// @ https://simile-widgets.org/exhibit3/examples/presidents/presidents.js
// @  https://www.ranker.com/collections/u-s-presidents?ref=collection_header

const presidentData = [
  {
    id: 1,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f65x2f2171956x2fpsjhjobmx2fhfpshf-x78btijohupo-qipup-v48x3fx78x3d761x26rx3d61x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 2,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f77x2f2412033x2fpsjhjobmx2fkpio-bebnt-qpmjujdjbot-qipup-v5x3fx78x3d761x26rx3d61x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 3,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f223x2f3348162x2fpsjhjobmx2fuipnbt-kfggfstpo-bsdijufdut-qipup-v6x3fx78x3d761x26rx3d61x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 4,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f75x2f2373843x2fpsjhjobmx2fkbnft-nbejtpo-qipup-v21x3fx78x3d761x26rx3d61x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 5,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f75x2f2374231x2fpsjhjobmx2fkbnft-npospf-x78sjufst-qipup-3x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 6,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f34x2f560260x2fpsjhjobmx2fboesfx78-kbdltpo-x78sjufst-qipup-4x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 7,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f56x2f909007x2fpsjhjobmx2fex78jhiu-e-fjtfoipx78fs-qipup-v35x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 8,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f231x2f3404558x2fpsjhjobmx2fx78jmmjbn-ifosz-ibssjtpo-x78sjufst-qipup-2x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 9,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f77x2f2426872x2fpsjhjobmx2fkpio-uzmfs-qipup-v7x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 10,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f75x2f2373484x2fpsjhjobmx2fkbnft-l-qpml-x78sjufst-qipup-3x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 11,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f233x2f3547201x2fpsjhjobmx2fabdibsz-ubzmps-qpmjujdjbot-qipup-4x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 12,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f91x2f2690586x2fpsjhjobmx2fnjmmbse-gjmmnpsf-x78sjufst-qipup-2x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 13,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f62x2f2128920x2fpsjhjobmx2fgsbolmjo-qjfsdf-qipup-v24x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 14,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f31x2f403357x2fpsjhjobmx2fbcsbibn-mjodpmo-qipup-v66x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 15,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f34x2f560317x2fpsjhjobmx2fboesfx78-kpiotpo-x78sjufst-qipup-4x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 16,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f47x2f823304x2fpsjhjobmx2fdiftufs-b-bsuivs-qpmjujdjbot-qipup-2x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 17,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fopef_jnhx2f67x2f2218177x2fpsjhjobmx2fhspwfs-dmfwfmboe-qpmjujdjbot-qipup-2x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 18,
    isClicked: false,
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f210x2f3281574x2fpsjhjobmx2fuifpepsf-spptfwfmu-qipup-v42x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 19,
    isClicked: false, //
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f231x2f3404849x2fpsjhjobmx2fx78jmmjbn-ipx78bse-ubgu-qipup-v28x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 20,
    isClicked: false, //
    imgUrl:
      'https://c-7npsfqifvt34x24jnhjyx2esbolfsx2edpn.g00.ranker.com/g00/3_c-7x78x78x78.sbolfs.dpn_/c-7NPSFQIFVT34x24iuuqtx3ax2fx2fjnhjy.sbolfs.dpnx2fvtfs_opef_jnhx2f45x2f771138x2fpsjhjobmx2fdbmwjo-dppmjehf-qipup-v22x3fx78x3d761x26rx3d71x26gnx3dqkqhx26gjux3ddspqx26dspqx3dgbdftx22x26j21d.nbslx3djnbhf_$/$/$/$/$/$',
  },
  {
    id: 21,
    isClicked: false, //
    imgUrl:
      'https://cbsnews1.cbsistatic.com/hub/i/2017/05/06/bd4e70fa-32ed-4088-bb10-650879f436ba/jfk-at-100-st-309-4-63.jpg',
  },
  {
    id: 22,
    isClicked: false, //
    imgUrl:
      'https://c-8oqtgrjgwu46x24koikzx2etcpmgtx2eeqo.g00.ranker.com/g00/3_c-8yyy.tcpmgt.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fkoikz.tcpmgt.eqox2fwugt_pqfg_koix2f73x2f3239896x2fqtkikpcnx2fhtcpmnkp-f-tqqugx78gnv-rqnkvkekcpu-rjqvq-w32x3fyx3d402x26jx3d402x26hkvx3detqrx26etqrx3dhcegux26sx3d72x26hox3drlrix26k32e.octmx3dkocig_$/$/$/$/$/$',
  },
  {
    id: 23,
    isClicked: false, //
    imgUrl:
      'https://c-8oqtgrjgwu46x24koikzx2etcpmgtx2eeqo.g00.ranker.com/g00/3_c-8yyy.tcpmgt.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fkoikz.tcpmgt.eqox2fpqfg_koix2f79x2f3356321x2fqtkikpcnx2fjctta-u-vtwocp-ytkvgtu-rjqvq-3x3fyx3d402x26jx3d402x26hkvx3detqrx26etqrx3dhcegux26sx3d72x26hox3drlrix26k32e.octmx3dkocig_$/$/$/$/$/$',
  },
  {
    id: 24,
    isClicked: false, //
    imgUrl:
      'https://c-8oqtgrjgwu46x24koikzx2etcpmgtx2eeqo.g00.ranker.com/g00/3_c-8yyy.tcpmgt.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fkoikz.tcpmgt.eqox2fpqfg_koix2f337x2f4411551x2fqtkikpcnx2fwnauugu-u-itcpv-ytkvgtu-rjqvq-4x3fyx3d402x26jx3d402x26hkvx3detqrx26etqrx3dhcegux26sx3d72x26hox3drlrix26k32e.octmx3dkocig_$/$/$/$/$/$',
  },
  {
    id: 25,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/d/d4/George-W-Bush.jpeg/100px-George-W-Bush.jpeg',
  },
  {
    id: 26,
    isClicked: false,
    imgUrl:
      'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/07/16/7292a6b2-a73c-11e9-8d5c-2d5b58977904_image_hires_041405.jpg?itok=tbJ6jDRm&v=1563221650',
  },
  {
    id: 27,
    isClicked: false,
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Official_portrait_of_Barack_Obama.jpg/100px-Official_portrait_of_Barack_Obama.jpg',
  },
  {
    id: 28,
    isClicked: false,
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gerald_Ford.jpg/100px-Gerald_Ford.jpg',
  },
  {
    id: 29,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Jimmy_Carter.jpg/100px-Jimmy_Carter.jpg',
  },
  {
    id: 30,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Portrait_of_President_Reagan_1981.jpg/100px-Official_Portrait_of_President_Reagan_1981.jpg',
  },
  {
    id: 31,
    isClicked: false, //
    imgUrl:
      'https://cbsnews1.cbsistatic.com/hub/i/2017/05/06/bd4e70fa-32ed-4088-bb10-650879f436ba/jfk-at-100-st-309-4-63.jpg',
  },
  {
    id: 32,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Calvin_Coolidge_photo_portrait_head_and_shoulders.jpg/100px-Calvin_Coolidge_photo_portrait_head_and_shoulders.jpg',
  },
  {
    id: 33,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/b/ba/HerbertHoover.jpg/100px-HerbertHoover.jpg',
  },
  {
    id: 34,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/President_Woodrow_Wilson_portrait_December_2_1912.jpg/100px-President_Woodrow_Wilson_portrait_December_2_1912.jpg',
  },
  {
    id: 35,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/8/87/Warren_G_Harding_portrait_as_senator_June_1920.jpg/100px-Warren_G_Harding_portrait_as_senator_June_1920.jpg',
  },
  {
    id: 36,
    isClicked: false,
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Eisenhower_official.jpg/100px-Eisenhower_official.jpg',
  },
  {
    id: 37,
    isClicked: false,
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lbj2.jpg/100px-Lbj2.jpg',
  },
  {
    id: 38,
    isClicked: false,
    imgUrl:
      'https://si.wsj.net/public/resources/images/AR-AM660_NIXON_8S_20160406102704.jpg',
  },
  {
    id: 39,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/0/0f/George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait.jpg/100px-George_H._W._Bush%2C_President_of_the_United_States%2C_1989_official_portrait.jpg',
  },
  {
    id: 40,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bill_Clinton.jpg/100px-Bill_Clinton.jpg',
  },
  {
    id: 41,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/9/97/President_Rutherford_Hayes_1870_-_1880.jpg/100px-President_Rutherford_Hayes_1870_-_1880.jpg',
  },
  {
    id: 42,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/1/1f/James_Abram_Garfield%2C_photo_portrait_seated.jpg/100px-James_Abram_Garfield%2C_photo_portrait_seated.jpg',
  },
  {
    id: 43,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Mckinley.jpg/100px-Mckinley.jpg',
  },
  {
    id: 44,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/President_Theodore_Roosevelt%2C_1904.jpg/100px-President_Theodore_Roosevelt%2C_1904.jpg',
  },
  {
    id: 45,
    isClicked: false, //
    imgUrl:
      '//upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg/100px-Benjamin_Harrison%2C_head_and_shoulders_bw_photo%2C_1896.jpg',
  },
];
export default presidentData;
