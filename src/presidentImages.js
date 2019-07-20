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
      'https://c-8oqtgrjgwu46x24koikzx2etcpmgtx2eeqo.g00.ranker.com/g00/3_c-8yyy.tcpmgt.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2fkoikz.tcpmgt.eqox2fpqfg_koix2f10x2f3174870x2fqtkikpcnx2ftwvjgthqtf-d-jcagu-ytkvgtu-rjqvq-4x3fyx3d402x26jx3d402x26hkvx3detqrx26etqrx3dhcegux26sx3d72x26hox3drlrix26k32e.octmx3dkocig_$/$/$/$/$/$',
  },
];
export default presidentData;
