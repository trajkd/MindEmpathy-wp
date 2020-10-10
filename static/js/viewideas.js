var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var queryParams = {
	ExpressionAttributeValues: {
		':id': {S: projectID}
	},
	KeyConditionExpression: 'ProjectID = :id',
	ProjectionExpression: 'ProjectID, Title, Description, Website, ImageBG, YoutubeBG, Logo, Tracks, Issue, Solution, ProjectStepImage1, ProjectStepTitle1, ProjectStepDescription1, ProjectStepImage2, ProjectStepTitle2, ProjectStepDescription2, ProjectStepImage3, ProjectStepTitle3, ProjectStepDescription3, ProjectStepImage4, ProjectStepTitle4, ProjectStepDescription4, ProjectStepImage5, ProjectStepTitle5, ProjectStepDescription5, ProjectStepImage6, ProjectStepTitle6, ProjectStepDescription6, ProjectStepImage7, ProjectStepTitle7, ProjectStepDescription7, ProjectStepImage8, ProjectStepTitle8, ProjectStepDescription8, ProjectStepImage9, ProjectStepTitle9, ProjectStepDescription9, PDF, Slides, Hiring',
	TableName: 'Projects'
};

dynamodb.query(queryParams, function(err, data) {
	if (err) {
		console.log("Error", err);
	} else {
		$(".project-intro__title").html(data.Items[0].Title.S);
		$(".project-intro__pitch").html(data.Items[0].Description.S);
		if (data.Items[0].Website.S !== "") {
			$(".medium-3").html(`<a target="_blank" rel="noopener" class="button project-intro__link" href="https://`+(data.Items[0].Website.S).replace("https://", "").replace("http://","")+`"> Website </a>`);
		}
		if (data.Items[0].YoutubeBG.S === "") {
			if (data.Items[0].ImageBG.S === "") {
				$(".project-banner").attr("style", "background-image: url('/wp-content/themes/MindEmpathy-wp/static/img/ikea-man.svg');");
			} else {
				$(".project-banner").attr("style", "background-image: url('"+data.Items[0].ImageBG.S+"');");
			}
		} else {
			$(".project-banner").attr("style", "background-image: url('https://img.youtube.com/vi/"+data.Items[0].YoutubeBG.S+"/maxresdefault.jpg'); background-size: cover; background-position: center center; position: relative; overflow: hidden;");
			$(".project-banner").append(`<div style="position: absolute; left: 0px; top: 0px;">
											<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>
										</div>`);
			$("#player0").attr("src", "https://www.youtube.com/embed/"+(data.Items[0].YoutubeBG.S).substring((data.Items[0].YoutubeBG.S).lastIndexOf('=') + 1)+"?autoplay=1&loop=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist="+(data.Items[0].YoutubeBG.S).substring((data.Items[0].YoutubeBG.S).lastIndexOf('=') + 1)+"&enablejsapi=1&widgetid=5");
		}
		if (data.Items[0].Logo.S === "") {
			$(".project-intro__logo img").attr("src", "/wp-content/themes/MindEmpathy-wp/static/img/idealogo.svg");
		} else {
			$(".project-intro__logo img").attr("src", data.Items[0].Logo.S);
		}
		var tracks = (data.Items[0].Tracks.S).split(',');
		for (var i = 0; i < tracks.length; i++) {
			$(".project-category__options").append(`<span class="project-category__options__item">`+tracks[i]+`</span>`);
		}
		$(".post--issue .project-post__content").html(data.Items[0].Issue.S);
		$(".post--solution .project-post__content").html(data.Items[0].Solution.S);
		$(".project-hiw__list-item1 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage1.S);
		$(".project-hiw__list-item1 .project-hiw__title").html(data.Items[0].ProjectStepTitle1.S);
		$(".project-hiw__list-item1 .project-hiw__content").html(data.Items[0].ProjectStepDescription1.S);
		$(".project-hiw__list-item2 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage2.S);
		$(".project-hiw__list-item2 .project-hiw__title").html(data.Items[0].ProjectStepTitle2.S);
		$(".project-hiw__list-item2 .project-hiw__content").html(data.Items[0].ProjectStepDescription2.S);
		$(".project-hiw__list-item3 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage3.S);
		$(".project-hiw__list-item3 .project-hiw__title").html(data.Items[0].ProjectStepTitle3.S);
		$(".project-hiw__list-item3 .project-hiw__content").html(data.Items[0].ProjectStepDescription3.S);
		if (typeof(data.Items[0].ProjectStepTitle4) !== "undefined" && data.Items[0].ProjectStepTitle4.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item4">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">4</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item4 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage4.S);
			$(".project-hiw__list-item4 .project-hiw__title").html(data.Items[0].ProjectStepTitle4.S);
			$(".project-hiw__list-item4 .project-hiw__content").html(data.Items[0].ProjectStepDescription4.S);
			$(".project-hiw__list").removeClass("list--3");
			$(".project-hiw__list").addClass("list--4");
		}
		if (typeof(data.Items[0].ProjectStepTitle5) !== "undefined" && data.Items[0].ProjectStepTitle5.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item5">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">5</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item5 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage5.S);
			$(".project-hiw__list-item5 .project-hiw__title").html(data.Items[0].ProjectStepTitle5.S);
			$(".project-hiw__list-item5 .project-hiw__content").html(data.Items[0].ProjectStepDescription5.S);
			$(".project-hiw__list").removeClass("list--4");
			$(".project-hiw__list").addClass("list--5");
		}
		if (typeof(data.Items[0].ProjectStepTitle6) !== "undefined" && data.Items[0].ProjectStepTitle6.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item6">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">6</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item6 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage6.S);
			$(".project-hiw__list-item6 .project-hiw__title").html(data.Items[0].ProjectStepTitle6.S);
			$(".project-hiw__list-item6 .project-hiw__content").html(data.Items[0].ProjectStepDescription6.S);
			$(".project-hiw__list").removeClass("list--5");
			$(".project-hiw__list").addClass("list--6");
		}
		if (typeof(data.Items[0].ProjectStepTitle7) !== "undefined" && data.Items[0].ProjectStepTitle7.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item7">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">7</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item7 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage7.S);
			$(".project-hiw__list-item7 .project-hiw__title").html(data.Items[0].ProjectStepTitle7.S);
			$(".project-hiw__list-item7 .project-hiw__content").html(data.Items[0].ProjectStepDescription7.S);
			$(".project-hiw__list").removeClass("list--6");
			$(".project-hiw__list").addClass("list--7");
		}
		if (typeof(data.Items[0].ProjectStepTitle8) !== "undefined" && data.Items[0].ProjectStepTitle8.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item8">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">8</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item8 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage8.S);
			$(".project-hiw__list-item8 .project-hiw__title").html(data.Items[0].ProjectStepTitle8.S);
			$(".project-hiw__list-item8 .project-hiw__content").html(data.Items[0].ProjectStepDescription8.S);
			$(".project-hiw__list").removeClass("list--7");
			$(".project-hiw__list").addClass("list--8");
		}
		if (typeof(data.Items[0].ProjectStepTitle9) !== "undefined" && data.Items[0].ProjectStepTitle9.S !== "") {
			$(".project-hiw__list").append(`<li class="project-hiw__list-item project-hiw__list-item9">
	                                            <div class="project-hiw">
	                                                <div class="project-hiw__wrap-image">
	                                                    <img class="project-hiw__image" src=""> 
	                                                    <div class="project-hiw__number">9</div>
	                                                </div>
	                                                <div class="project-hiw__title"></div>
	                                                <p class="project-hiw__content"></p>
	                                            </div>
	                                        </li>`);
			$(".project-hiw__list-item9 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage9.S);
			$(".project-hiw__list-item9 .project-hiw__title").html(data.Items[0].ProjectStepTitle9.S);
			$(".project-hiw__list-item9 .project-hiw__content").html(data.Items[0].ProjectStepDescription9.S);
			$(".project-hiw__list").removeClass("list--8");
			$(".project-hiw__list").addClass("list--9");
		}
		if (data.Items[0].PDF.S === "") {
			if (data.Items[0].Slides.S === "") {
				$(".project-presentation__slideshare").html("Presentation not available.");
			} else {
				$(".project-presentation__slideshare").html(`<iframe src="" allowfullscreen="1"></iframe>`);
				$(".project-presentation__slideshare iframe").attr("src", (data.Items[0].Slides.S).substring(0,(data.Items[0].Slides.S).lastIndexOf('/'))+"/embed?start=false");
			}
		} else {
			$(".project-presentation__slideshare").html(`<object data="`+data.Items[0].PDF.S+`" type="application/pdf" width="100%" height="800px"> 
															<p>It appears you don't have a PDF plugin for this browser.
															<a href="`+data.Items[0].PDF.S+`">Click here to download the PDF file.</a></p>  
														</object>`);
		}
		var hiring = (data.Items[0].Hiring.S).split(',');
		for (var i = 0; i < hiring.length; i++) {
			$(".project-hires").append(`<li class="project-hires__item enabled">
	                                        <span class="project-hires__item__tag">`+hiring[i]+`</span> 
	                                        <div class="project-hires__item__info">We're hiring!</div>
	                                        <div class="project-hires__item__apply">Apply now</div>
	                                    </li>`);
		}
	}
});

$("button.full").click( function() {
	window.location.href = "/editidea/"+projectID;
}