var myCredentials = new AWS.CognitoIdentityCredentials({IdentityPoolId:'eu-central-1:dbfaca2d-0214-4100-9f00-e82d3b15c7ba'});
var myConfig = new AWS.Config({credentials: myCredentials, region: 'eu-central-1'});

AWS.config.update({credentials: myCredentials, region: 'eu-central-1'});

var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var s3 = new AWS.S3({apiVersion: "2006-03-01",params: { Bucket: "mindempathynet" }});

var queryParams = {
		ExpressionAttributeValues: {
			':id': {S: projectID}
		},
		KeyConditionExpression: 'ProjectID = :id',
		ProjectionExpression: 'ProjectID, Title, Description, ImageBG, Logo, Tracks, Issue, Solution, ProjectStepImage1, ProjectStepTitle1, ProjectStepDescription1, ProjectStepImage2, ProjectStepTitle2, ProjectStepDescription2, ProjectStepImage3, ProjectStepTitle3, ProjectStepDescription3, ProjectStepImage4, ProjectStepTitle4, ProjectStepDescription4, Slides',
		TableName: 'Projects'
	};

	dynamodb.query(queryParams, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			$(".project-intro__title").html(data.Items[0].Title.S);
			$(".project-intro__pitch").html(data.Items[0].Description.S);
			$(".project-banner").attr("style", "background-image: url('"+data.Items[0].ImageBG.S+"');");
			$(".project-intro__logo img").attr("src", data.Items[0].Logo.S);
			$(".category__options__item").html(data.Items[0].Tracks.S);
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
			$(".project-hiw__list-item4 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage4.S);
			$(".project-hiw__list-item4 .project-hiw__title").html(data.Items[0].ProjectStepTitle4.S);
			$(".project-hiw__list-item4 .project-hiw__content").html(data.Items[0].ProjectStepDescription4.S);
			$(".project-presentation__slideshare iframe").attr("src", data.Items[0].Slides.S);
		}
	});