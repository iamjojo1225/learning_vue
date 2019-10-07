<template>
	<div>
		<!-- <h1>About</h1> -->
		<router-view :aboutDatas="aboutDatas"/>
	</div>
</template>


<script type="text/javascript">
export default {
  data() {
    return {
      aboutDatas: [
        {
          id: 1,
          name: "aboutBas",
          url:
            "https://assets.sunscaperesorts.com/crop-1180x790-max/puerto-plata/SUPOP_SPA_Jacuzzi_2A.jpg",
          text:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'."
        },
        {
          id: 2,
          name: "aboutTree",
          url:
            "https://www.gowabi.com/system/pictures/images/000/004/651/big_slider_pic/grace_spa.jpg?1523950536",
          text:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly. "
        },
        {
          id: 3,
          name: "aboutWater",
          url:
            "https://www.hotellunetta.com/files-sbbasic/sr_hotellunetta_com/hotel-lunetta-rome-spa-11.jpg?w=2048&h=1150",
          text:
            "believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the."
        }
      ]
    };
  }
};
</script>
