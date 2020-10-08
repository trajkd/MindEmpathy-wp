var imageBGfiles, logofiles, pdffiles;
var stepfilesDict = {};
stepfilesDict["step1"] = "";
stepfilesDict["step2"] = "";
stepfilesDict["step3"] = "";
stepfilesDict["step4"] = "";
stepfilesDict["step5"] = "";
stepfilesDict["step6"] = "";
stepfilesDict["step7"] = "";
stepfilesDict["step8"] = "";
stepfilesDict["step9"] = "";

$(".image-bg").click( function() {
	$(".video-bg").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">Upload an image</span> </div>
        <div class="project-tabs-content__input-container">
            <idt-fs-upload-file type="image" class="upload" on-uploaded="onUploadedIllustration" on-error="onUploadedIllustrationError" label="Add illustration">
                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile149617" ng-disabled="disable">
                    <input type="file" accept="image/*" class="input-file-hidden input-file-hidden-bg-image ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile149617" name="uploader"><span class="upload-file__progress">Add illustration</span>
                </label>
            </idt-fs-upload-file>
            <button type="button" class="project-tabs-content__btn-delete ng-hide">
                <div class="idt-icon">
                    <i class="fas fa-trash"></i>
                </div>
            </button>
        </div>
		`);

	$(".input-file-hidden-bg-image").change(function(e) {

		var uploadedStep = $(this)

		imageBGfiles = e.originalEvent.srcElement.files;

        var file = imageBGfiles[0];

        var reader = new FileReader();
        reader.onloadend = function() {
        	$("#player0").remove();
			$(".project-banner").attr("style", "background-image:url("+reader.result+")");
        }
        reader.readAsDataURL(file);
	});
});

$(".video-bg").click( function() {
	$(".image-bg").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">Insert YouTube video link, no sound will be played</span> </div>
        <div class="project-tabs-content__input-container">
        	<input id="youtubeID" type="text" class="project-tabs-content__video-input ng-pristine ng-untouched ng-valid ng-empty" name="video" placeholder="youtube.com/…">
    		<button type="button" class="project-tabs-content__btn-delete ng-hide">
    			<div class="idt-icon">
    			<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
    			<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
    			</use>
    			</svg>
    			</div>
    		</button>
        </div>
		`);
	$("#youtubeID").on("keyup change", function() {
		$(this).parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
		$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist=o&enablejsapi=1&widgetid=5");
	});
});

$(window).resize(function() {
	$("#player0").css({"width":$(".project-banner").width(), "height":$(".project-banner").height()})
});

$(".input-file-hidden-bg-image").change(function(e) {

	var uploadedStep = $(this)

	imageBGfiles = e.originalEvent.srcElement.files;

    var file = imageBGfiles[0];

    var reader = new FileReader();
    reader.onloadend = function() {
    	$("#player0").remove();
		$(".project-banner").attr("style", "background-image:url("+reader.result+")");
    }
    reader.readAsDataURL(file);
});

$(".upload-logo").change(function(e) {

	var uploadedStep = $(this)

	logofiles = e.originalEvent.srcElement.files;

    var file = logofiles[0];

    var reader = new FileReader();
    reader.onloadend = function() {
    	$(".project-intro__logo img").attr("src", reader.result);
    }
    reader.readAsDataURL(file);
});

$(".input-dropdown__input__container").click( function() {
	$(".dropdown-pane-right").toggleClass("is-open");
});

$(".dropdown-pane__checkbox").click( function() {
	if ($(this).parent().find("input").attr("checked")) {
        $(this).parent().find("input").removeAttr("checked");
    } else {
        $(this).parent().find("input").attr("checked", "checked");
    }
	$(this).parent().find("input").toggleClass("checked");
});

$(".presentation-url").click( function() {
	$(".pdf-file").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note">
            <span class="note-text">Slideshare or Googleslide public URL</span>
        </div>
        <div class="project-tabs-content__input-container">
            <input type="text" placeholder="Insert URL" class="ng-pristine ng-untouched ng-valid ng-empty"> 
            <button class="trash-button" type="button">
                <div class="idt-icon">
                    <i class="fas fa-trash"></i>
                </div>
            </button>
        </div>
		`);
});

$(".pdf-file").click( function() {
	$(".presentation-url").addClass("hollow");
	$(this).removeClass("hollow");
	$(this).parent().next().html(`
		<div class="project-tabs-content__note"> <span class="note-text">PDF document</span> </div>
        <div class="project-tabs-content__input-container">
        	<idt-fs-upload-file type="pdf" class="upload" name="presentationPDF" label="Upload PDF document" on-uploaded="onUploadedPresentation" on-error="onError">
        		<label type="button" class="button upload-pdf upload-file__btn" accept="application/pdf, .pdf" for="inputFile48718" ng-disabled="disable">
        			<input type="file" accept="application/pdf, .pdf" class="input-file-hidden input-file-hidden-pdf ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile48718" name="uploader">
        			<span></span>
        			<span class="upload-file__progress">Upload PDF document</span>
        		</label>
        	</idt-fs-upload-file>
        	<button type="button" class="project-tabs-content__btn-delete ng-hide">
        		<div class="idt-icon">
        		<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
        		<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
        		</use></svg>
        		</div>
        	</button>
        </div>
		`);
	$(".upload-pdf").change(function(e) {

		var pdffiles = e.originalEvent.srcElement.files

        var file = e.originalEvent.srcElement.files[0];

		var pdffileName = file.name;

        var reader = new FileReader();
        reader.onloadend = function() {
			$(".upload-pdf").children().last().html(pdffileName);
        }
        reader.readAsDataURL(file);
	});
});

$(document).on("click touch", ".add-step", function(e) {
	e.preventDefault();
	var steps = parseInt($(".project-hiw__list").attr('class').substr(-1), 10);
	$(".project-hiw__list").append(`
	<li class="project-hiw__list-item">
        <div class="project-hiw">
            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
                <img class="project-hiw__image ng-hide"> 
                <div class="project-hiw__image-number">`+(steps+1)+`</div>
            </div>
            <!---->
            <div>
                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
                    </label>
                </idt-fs-upload-file>
                <span class="project-hiw__delete-icon"> 
                	<div class="idt-icon">
                		<i class="fas fa-trash"></i>
                	</div> 
                </span>
                <!----> 
                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
                <!----> 
                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
                </div>
            </div>
            <!----> <!----> <!----> 
        </div>
    </li>
    `);
    $(".project-hiw__list").removeClass("list--"+steps);
    $(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');

    if($(".project-step-title").val().length > 50){
        val = $(".project-step-title").val().substr(0,50);
        $(".project-step-title").val(val);
    };
    $(".project-step-title").next().html("" + (50-$(".project-step-title").val().length));

    if($(".project-step-description").val().length > 200){
        val = $(".project-step-description").val().substr(0,200);
        $(".project-step-description").val(val);
    };
    $(".project-step-description").next().html("" + (200-$(".project-step-description").val().length));

    $(".input-file-hidden").change(function(e) {

		var uploadedStep = $(this);
		var stepNumber = uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").html();

		var stepfiles = e.originalEvent.srcElement.files;

		stepfilesDict["step" + stepNumber] = stepfiles;

	    var file = stepfiles[0];

	    var reader = new FileReader();
	    reader.onloadend = function() {
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").attr("src", reader.result);
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__number" style=""> `+stepNumber+` </div>`)
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").removeClass("ng-hide");
			uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").addClass("ng-hide");
	    }
	    reader.readAsDataURL(file);
	});
});

$(document).on("click touch", ".project-tabs-content .trash-button", function(e) {
	e.preventDefault();
	$(".upload-slides").val("");
});

$(document).on("click touch", ".project-screenshot__add", function(e) {
	e.preventDefault();
	var last_image_upload = $(this).parent().parent().children().last().prev().find("input")
	if($(this).parent().parent().children().length === 1) {
		$(`<div class="column small-12 medium-6 large-3 project-screenshot">
			<div class="fs__image-upload" style="background-image: url(&quot;null&quot;);">
				<div class="fs__image-upload__label">
					<div class="fs__image-upload__label__content">
						<idt-fs-upload-file class="fs__image-upload__button ng-pristine ng-untouched ng-valid ng-empty" type="image" on-error="onError" label="Upload file" on-uploaded="onUploadedScreenshot($index)">
							<label type="button" class="button upload-image upload-file__btn" accept="image/*" for="inputImage1" ng-disabled="disable">
								<input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputImage1" name="uploader">
								<span></span>
								<span class="upload-file__progress">Upload file</span>
							</label>
						</idt-fs-upload-file>
						<div class="fs__image-upload__button__spec"> Recommended resolution: 1920x1124px </div>
					</div>
				</div>
			</div>
			<button type="button" class="project-screenshot__delete">
				<div class="idt-icon">
					<i class="fas fa-trash"></i>
				</div>
			</button>
		</div>`).insertBefore($(this).parent());
	} else {
		$(`<div class="column small-12 medium-6 large-3 project-screenshot">
			<div class="fs__image-upload" style="background-image: url(&quot;null&quot;);">
				<div class="fs__image-upload__label">
					<div class="fs__image-upload__label__content">
						<idt-fs-upload-file class="fs__image-upload__button ng-pristine ng-untouched ng-valid ng-empty" type="image" on-error="onError" label="Upload file" on-uploaded="onUploadedScreenshot($index)">
							<label type="button" class="button upload-image upload-file__btn" accept="image/*" for="inputImage`+(parseInt(last_image_upload.attr('id').substr(-1), 10)+1)+`" ng-disabled="disable">
								<input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputImage`+(parseInt(last_image_upload.attr('id').substr(-1), 10)+1)+`" name="uploader">
								<span></span>
								<span class="upload-file__progress">Upload file</span>
							</label>
						</idt-fs-upload-file>
						<div class="fs__image-upload__button__spec"> Recommended resolution: 1920x1124px </div>
					</div>
				</div>
			</div>
			<button type="button" class="project-screenshot__delete">
				<div class="idt-icon">
					<i class="fas fa-trash"></i>
				</div>
			</button>
		</div>`).insertBefore($(this).parent());
	}
	$(document).on("click touch", ".project-screenshot__delete", function(e) {
		e.preventDefault();
		$(this).parent().remove();
	});

	$(".upload-image").change(function(e) {

		var uploadedImage = $(this)

	    for (var i = 0; i < e.originalEvent.srcElement.files.length; i++) {

	        var file = e.originalEvent.srcElement.files[i];

	        var reader = new FileReader();
	        reader.onloadend = function() {
				uploadedImage.parent().parent().parent().parent().attr("style", "background-image:url("+reader.result+")");
	        	uploadedImage.parent().parent().parent().addClass("is-set");
	        }
	        reader.readAsDataURL(file);
	    }
	});
});

$(document).on("click touch", ".project-social__delete", function(e) {
	e.preventDefault();
	$(this).parent().find(".project-social__input-add").val("");
});

$(".project-tools__toggle").click( function() {
	$(".project-tools__toggle").toggleClass("open");
	$(".project-tools").toggleClass("open");
});

$(".project-hires__item").click( function() {
	$(this).toggleClass("enabled");
	$(this).find(".project-hires__item__check").toggleClass("checked");
});

$("#social_facebook").on("keyup change", function() {
	if (/^(https?:\/\/)?((w{3}\.)?)facebook.com\/.*/i.test($(this).val()) || $(this).val() === "") {
		$(".fb-error").addClass("ng-hide")
	} else {
		$(".fb-error").removeClass("ng-hide")
	}
});

$("#social_twitter").on("keyup change", function() {
	if (/^(https?:\/\/)?((w{3}\.)?)twitter\.com\/(#!\/)?[a-z0-9_]+$/i.test($(this).val()) || $(this).val() === "") {
		$(".tw-error").addClass("ng-hide")
	} else {
		$(".tw-error").removeClass("ng-hide")
	}
});

$("#social_google").on("keyup change", function() {
	if (/^(https?:\/\/)?((w{3}\.)?)instagram.com\/.*/i.test($(this).val()) || $(this).val() === "") {
		$(".ig-error").addClass("ng-hide")
	} else {
		$(".ig-error").removeClass("ng-hide")
	}
});

$("#social_linkedin").on("keyup change", function() {
	if (/^(https?:\/\/)?((w{3}\.)?)linkedin.com\/.*/i.test($(this).val()) || $(this).val() === "") {
		$(".in-error").addClass("ng-hide")
	} else {
		$(".in-error").removeClass("ng-hide")
	}
});

$(window).on('load', function() {
	if($(".project-title").val().length > 60){
        val = $(".project-title").val().substr(0,60);
        $(".project-title").val(val);
    };
    $(".project-title").next().html("" + (60-$(".project-title").val().length));
});

$(".project-title").on("keyup change", function() {
	if($(this).val().length > 60){
        val = $(this).val().substr(0,60);
        $(this).val(val);
    };
	$(this).next().html("" + (60-$(this).val().length));
});

$(window).on('load', function() {
	if($(".project-tweet").val().length > 140){
        val = $(".project-tweet").val().substr(0,140);
        $(".project-tweet").val(val);
    };
    $(".project-tweet").next().html("" + (140-$(".project-tweet").val().length));
});

$(".project-tweet").on("keyup change", function() {
	if($(this).val().length > 140){
        val = $(this).val().substr(0,140);
        $(this).val(val);
    };
	$(this).next().html("" + (140-$(this).val().length));
});

$(window).on('load', function() {
	if($(".project-tweet").val().length > 140){
        val = $(".project-tweet").val().substr(0,140);
        $(".project-tweet").val(val);
    };
    $(".project-tweet").next().html("" + (140-$(".project-tweet").val().length));
});

$(".project-tweet").on("keyup change", function() {
	if($(this).val().length > 140){
        val = $(this).val().substr(0,140);
        $(this).val(val);
    };
	$(this).next().html("" + (140-$(this).val().length));
});

$(window).on('load', function() {
	if($(".the-issue").val().length > 600){
        val = $(".the-issue").val().substr(0,600);
        $(".the-issue").val(val);
    };
    $(".the-issue").next().html("" + (600-$(".the-issue").val().length));
});

$(".the-issue").on("keyup change", function() {
	if($(this).val().length > 600){
        val = $(this).val().substr(0,600);
        $(this).val(val);
    };
	$(this).next().html("" + (600-$(this).val().length));
});

$(window).on('load', function() {
	if($(".the-solution").val().length > 600){
        val = $(".the-solution").val().substr(0,600);
        $(".the-solution").val(val);
    };
    $(".the-solution").next().html("" + (600-$(".the-solution").val().length));
});

$(".the-solution").on("keyup change", function() {
	if($(this).val().length > 600){
        val = $(this).val().substr(0,600);
        $(this).val(val);
    };
	$(this).next().html("" + (600-$(this).val().length));
});

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
	ProjectionExpression: 'ProjectID, Title, Description, Website, ImageBG, YoutubeBG, Logo, Tracks, Issue, Solution, ProjectStepImage1, ProjectStepTitle1, ProjectStepDescription1, ProjectStepImage2, ProjectStepTitle2, ProjectStepDescription2, ProjectStepImage3, ProjectStepTitle3, ProjectStepDescription3, ProjectStepImage4, ProjectStepTitle4, ProjectStepDescription4, PDF, Slides, Hiring',
	TableName: 'Projects'
};

dynamodb.query(queryParams, function(err, data) {
	if (err) {
		console.log("Error", err);
	} else {
		if (data.Items.length > 0) {
			$(".project-title").val(data.Items[0].Title.S);
			$(".project-tweet").val(data.Items[0].Description.S);
			if (data.Items[0].YoutubeBG.S !== "") {
				$(".image-bg").addClass("hollow");
				$(".video-bg").removeClass("hollow");
				$(".video-bg").parent().next().html(`
					<div class="project-tabs-content__note"> <span class="note-text">Insert YouTube video link, no sound will be played</span> </div>
			        <div class="project-tabs-content__input-container">
			        	<input id="youtubeID" type="text" class="project-tabs-content__video-input ng-pristine ng-untouched ng-valid ng-empty" name="video" placeholder="youtube.com/…">
			    		<button type="button" class="project-tabs-content__btn-delete ng-hide">
			    			<div class="idt-icon">
			    			<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
			    			<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
			    			</use>
			    			</svg>
			    			</div>
			    		</button>
			        </div>
					`);
				$(".project-banner").attr("style", "background-image: url('https://img.youtube.com/vi/"+data.Items[0].YoutubeBG.S+"/maxresdefault.jpg'); background-size: cover; background-position: center center; position: relative; overflow: hidden;");
				$(".project-banner").append(`<div style="position: absolute; left: 0px; top: 0px;">
											<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>
										</div>`);
				$("#youtubeID").val(data.Items[0].YoutubeBG.S);
				$(".video-bg").parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
				$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist=o&enablejsapi=1&widgetid=5");
				$("#youtubeID").on("keyup change", function() {
					$(".video-bg").parent().parent().parent().parent().children().first().html(`<iframe id="player0" frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="`+$(".project-banner").width()+`" height="`+$(".project-banner").height()+`" style="pointer-events: none;"></iframe>`);
					$("#player0").attr("src", "https://www.youtube.com/embed/"+$("#youtubeID").val().substring($("#youtubeID").val().lastIndexOf('=') + 1)+"?autoplay=1&mute=1&controls=0&iv_load_policy=3&cc_load_policy=0modestbranding=1playsinline=1&rel=0&showinfo=0&playlist=o&enablejsapi=1&widgetid=5");
				});
			} else if (data.Items[0].ImageBG.S !== "") {
				$(".project-banner").attr("style", "background-image: url('"+data.Items[0].ImageBG.S+"');");
			} else {
				$(".project-banner").attr("style", "background-image: url('/wp-content/themes/MindEmpathy-wp/static/img/ikea-man.svg');");
			}
			$(".app-url").val(data.Items[0].Website.S);
			var tracks = (data.Items[0].Tracks.S).split(',');
			for (var i = 0; i < tracks.length; i++) {
				$("#"+tracks[i]).attr("checked", "checked");
				$("#"+tracks[i]).addClass("checked");
			}
			if (data.Items[0].Logo.S === "") {
				$(".project-intro__logo img").attr("src", "/wp-content/themes/MindEmpathy-wp/static/img/idealogo.svg");
			} else {
				$(".project-intro__logo img").attr("src", data.Items[0].Logo.S);
			}
			$(".the-issue").val(data.Items[0].Issue.S);
			$(".the-solution").val(data.Items[0].Solution.S);
			function loadSteps(callback) {
				if (typeof(data.Items[0].ProjectStepTitle1) !== "undefined" && data.Items[0].ProjectStepTitle1.S === "") {
					$(".edit-steps").before(`<ul class="project-hiw__list list--3">
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item1">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">1</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default"on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile1">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile1" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title1 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description1 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item2">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">2</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile2">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile2" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title2 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description2 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item3">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">3</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile3">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile3" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title3 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description3 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								                <!----> 
								            </ul>`);
				} else {
					$(".edit-steps").before(`<ul class="project-hiw__list list--1">
								                <!---->
								                <li class="project-hiw__list-item project-hiw__list-item1">
								                    <div class="project-hiw">
								                        <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
								                            <img class="project-hiw__image ng-hide"> 
								                            <div class="project-hiw__image-number">1</div>
								                        </div>
								                        <!---->
								                        <div>
								                            <idt-fs-upload-file type="image" class="upload-default"on-error="onError" label="Add an image">
								                                <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile1">
								                                    <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile1" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
								                                </label>
								                            </idt-fs-upload-file>
								                            <span class="project-hiw__delete-icon"> 
								                            	<div class="idt-icon">
								                            		<i class="fas fa-trash"></i>
								                            	</div> 
								                            </span>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title1 ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
								                            <!----> 
								                            <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description1 project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
								                            </div>
								                        </div>
								                        <!----> <!----> <!----> 
								                    </div>
								                </li>
								            </ul>`);
					$(".project-hiw__list").removeClass("list--1");
	    			$(".project-hiw__list").addClass("list--1").trigger('classChange');
					$(".project-hiw__list-item1 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage1.S);
					$(".project-step-title1").val(data.Items[0].ProjectStepTitle1.S);
					$(".project-step-description1").val(data.Items[0].ProjectStepDescription1.S);
					$(".project-hiw__list-item1 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">1</div>`)
					$(".project-hiw__list-item1 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item1 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(data.Items[0].ProjectStepTitle2) !== "undefined" && data.Items[0].ProjectStepTitle2.S !== "") {
					var steps = 1;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item2 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage2.S);
					$(".project-step-title2").val(data.Items[0].ProjectStepTitle2.S);
					$(".project-step-description2").val(data.Items[0].ProjectStepDescription2.S);
					$(".project-hiw__list-item2 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item2 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item2 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(data.Items[0].ProjectStepTitle3) !== "undefined" && data.Items[0].ProjectStepTitle3.S !== "") {
					var steps = 2;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item3 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage3.S);
					$(".project-step-title3").val(data.Items[0].ProjectStepTitle3.S);
					$(".project-step-description3").val(data.Items[0].ProjectStepDescription3.S);
					$(".project-hiw__list-item3 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item3 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item3 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(data.Items[0].ProjectStepTitle4) !== "undefined" && data.Items[0].ProjectStepTitle4.S !== "") {
					var steps = 3;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item4 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage4.S);
					$(".project-step-title4").val(data.Items[0].ProjectStepTitle4.S);
					$(".project-step-description4").val(data.Items[0].ProjectStepDescription4.S);
					$(".project-hiw__list-item4 .project-hiw__wrap-image").append(`<div class="project-hiw__number" style="">`+(steps+1)+`</div>`)
					$(".project-hiw__list-item4 .project-hiw__image").removeClass("ng-hide");
					$(".project-hiw__list-item4 .project-hiw__image-number").addClass("ng-hide");
				}
				if (typeof(data.Items[0].ProjectStepTitle5) !== "undefined" && data.Items[0].ProjectStepTitle5.S !== "") {
					var steps = 4;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item5 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage5.S);
					$(".project-step-title5").val(data.Items[0].ProjectStepTitle5.S);
					$(".project-step-description5").val(data.Items[0].ProjectStepDescription5.S);
				}
				if (typeof(data.Items[0].ProjectStepTitle6) !== "undefined" && data.Items[0].ProjectStepTitle6.S !== "") {
					var steps = 5;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item6 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage6.S);
					$(".project-step-title6").val(data.Items[0].ProjectStepTitle6.S);
					$(".project-step-description6").val(data.Items[0].ProjectStepDescription6.S);
				}
				if (typeof(data.Items[0].ProjectStepTitle7) !== "undefined" && data.Items[0].ProjectStepTitle7.S !== "") {
					var steps = 6;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item7 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage7.S);
					$(".project-step-title7").val(data.Items[0].ProjectStepTitle7.S);
					$(".project-step-description7").val(data.Items[0].ProjectStepDescription7.S);
				}
				if (typeof(data.Items[0].ProjectStepTitle8) !== "undefined" && data.Items[0].ProjectStepTitle8.S !== "") {
					var steps = 7;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item8 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage8.S);
					$(".project-step-title8").val(data.Items[0].ProjectStepTitle8.S);
					$(".project-step-description8").val(data.Items[0].ProjectStepDescription8.S);
				}
				if (typeof(data.Items[0].ProjectStepTitle9) !== "undefined" && data.Items[0].ProjectStepTitle9.S !== "") {
					var steps = 8;
					$(".project-hiw__list").append(`
					<li class="project-hiw__list-item project-hiw__list-item`+(steps+1)+`">
				        <div class="project-hiw">
				            <div class="project-hiw__wrap-image project-hiw__wrap-image-no-content">
				                <img class="project-hiw__image ng-hide"> 
				                <div class="project-hiw__image-number">`+(steps+1)+`</div>
				            </div>
				            <!---->
				            <div>
				                <idt-fs-upload-file type="image" class="upload-default" on-uploaded="onUploadedSteps($index)" on-error="onError" label="Add an image">
				                    <label type="button" class="button upload-file__btn" accept="image/*" for="inputFile`+(steps+1)+`">
				                        <input type="file" accept="image/*" class="input-file-hidden ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile`+(steps+1)+`" name="uploader"> <span></span> <span class="upload-file__progress">Add an image</span>
				                    </label>
				                </idt-fs-upload-file>
				                <span class="project-hiw__delete-icon"> 
				                	<div class="idt-icon">
				                		<i class="fas fa-trash"></i>
				                	</div> 
				                </span>
				                <!----> 
				                <div class="idt-max-length__wrapper"><input type="text" value="" idt-max-length="50" placeholder="Step title" class="project-step-title project-step-title`+(steps+1)+` ng-pristine ng-untouched ng-valid ng-empty editable"><span class="idt-max-length__counter"></span></div>
				                <!----> 
				                <div class="idt-max-length__wrapper"><textarea class="project-step-description project-step-description`+(steps+1)+` project__textarea ng-pristine ng-untouched ng-valid ng-empty editable" idt-max-length="200" rows="1" placeholder="Step description"></textarea><span class="idt-max-length__counter"></span>
				                </div>
				            </div>
				            <!----> <!----> <!----> 
				        </div>
				    </li>
				    `);
				    $(".project-hiw__list").removeClass("list--"+steps);
	   				$(".project-hiw__list").addClass("list--"+(steps+1)).trigger('classChange');
	   				$(".project-hiw__list-item9 .project-hiw__image").attr("src", data.Items[0].ProjectStepImage9.S);
					$(".project-step-title9").val(data.Items[0].ProjectStepTitle9.S);
					$(".project-step-description9").val(data.Items[0].ProjectStepDescription9.S);
				}

				callback();
			}

			function loadCounterAndAttachEvents() {
				if($(".project-step-title").val().length > 50){
			        val = $(".project-step-title").val().substr(0,50);
			        $(".project-step-title").val(val);
			    };
			    $(".project-step-title").next().html("" + (50-$(".project-step-title").val().length));

			    $(".project-step-title").on("keyup change", function() {
					if($(this).val().length > 50){
				        val = $(this).val().substr(0,50);
				        $(this).val(val);
				    };
					$(this).next().html("" + (50-$(this).val().length));
				});

			    if($(".project-step-description").val().length > 200){
			        val = $(".project-step-description").val().substr(0,200);
			        $(".project-step-description").val(val);
			    };
			    $(".project-step-description").next().html("" + (200-$(".project-step-description").val().length));

			    $(".project-step-description").on("keyup change", function() {
					if($(this).val().length > 200){
				        val = $(this).val().substr(0,200);
				        $(this).val(val);
				    };
					$(this).next().html("" + (200-$(this).val().length));
				});


				$(document).on("click touch", ".delete-step", function(e) {
					e.preventDefault();
					var steps = parseInt($(".project-hiw__list").attr('class').substr(-1), 10);
					$(".project-hiw__list").children().last().remove();
				    $(".project-hiw__list").removeClass("list--"+steps);
				    $(".project-hiw__list").addClass("list--"+(steps-1)).trigger('classChange');
				});

				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
					$('.add-step').attr("disabled", "disabled");
				} else {
					$('.add-step').removeAttr("disabled");
				}
				if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
					$('.delete-step').attr("disabled", "disabled");
				} else {
					$('.delete-step').removeAttr("disabled");
				}

				$('.project-hiw__list').on('classChange', function() {
					if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 9) {
						$('.add-step').attr("disabled", "disabled");
					} else {
						$('.add-step').removeAttr("disabled");
					}
					if (parseInt($(".project-hiw__list").attr('class').substr(-1), 10) === 3) {
						$('.delete-step').attr("disabled", "disabled");
					} else {
						$('.delete-step').removeAttr("disabled");
					}
				});

				$(".input-file-hidden").change(function(e) {

					var uploadedStep = $(this);
					var stepNumber = uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").html();

					var stepfiles = e.originalEvent.srcElement.files;

					stepfilesDict["step" + stepNumber] = stepfiles;

				    var file = stepfiles[0];

				    var reader = new FileReader();
				    reader.onloadend = function() {
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").attr("src", reader.result);
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__number" style=""> `+stepNumber+` </div>`)
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image").removeClass("ng-hide");
						uploadedStep.parent().parent().parent().parent().find(".project-hiw__image-number").addClass("ng-hide");
				    }
				    reader.readAsDataURL(file);
				});

				$(document).on("click touch", ".project-hiw__delete-icon .fa-trash", function(e) {
					e.preventDefault();
					$(this).parent().parent().parent().parent().find(".project-hiw__image").addClass("ng-hide");
				    $(this).parent().parent().parent().parent().find(".project-hiw__image-number").removeClass("ng-hide");
				    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").children().last().remove();
				    $(this).parent().parent().parent().parent().find(".project-hiw__wrap-image").append(`<div class="project-hiw__image-number"> `+$(this).parent().parent().prev().find(".input-file-hidden").attr("id").substr(-1)+` </div>`)
				});
			}

			loadSteps(loadCounterAndAttachEvents);

			if (data.Items[0].PDF.S !== "") {
				$(".presentation-url").addClass("hollow");
				$(".pdf-file").removeClass("hollow");
				$(".pdf-file").parent().next().html(`
					<div class="project-tabs-content__note"> <span class="note-text">PDF document</span> </div>
			        <div class="project-tabs-content__input-container">
			        	<idt-fs-upload-file type="pdf" class="upload" name="presentationPDF" label="Upload PDF document" on-uploaded="onUploadedPresentation" on-error="onError">
			        		<label type="button" class="button upload-pdf upload-file__btn" accept="application/pdf, .pdf" for="inputFile48718" ng-disabled="disable">
			        			<input type="file" accept="application/pdf, .pdf" class="input-file-hidden input-file-hidden-pdf ng-pristine ng-untouched ng-valid ng-not-empty" id="inputFile48718" name="uploader">
			        			<span></span>
			        			<span class="upload-file__progress">Upload PDF document</span>
			        		</label>
			        	</idt-fs-upload-file>
			        	<button type="button" class="project-tabs-content__btn-delete ng-hide">
			        		<div class="idt-icon">
			        		<svg class="ideacon idea-ht-bin" style="width: 1.2rem; height: 1.2rem;">
			        		<use xlink:href="icons/ideacons-defs.svg#idea-ht-bin">
			        		</use></svg>
			        		</div>
			        	</button>
			        </div>
					`);
				$(".upload-pdf").children().last().html(decodeURIComponent(data.Items[0].PDF.S.replace("https://mindempathynet.s3.eu-central-1.amazonaws.com/", "")));
			} else if (data.Items[0].Slides.S !== "") {
				$(".upload-slides").val(data.Items[0].Slides.S);
			}
			var hiring = (data.Items[0].Hiring.S).split(',');
			for (var i = 0; i < hiring.length; i++) {
				$("."+hiring[i].toLowerCase().replace(" ", "-").replace("/", "")).addClass("enabled");
				$("."+hiring[i].toLowerCase().replace(" ", "-").replace("/", "")).find(".project-hires__item__check").addClass("checked");
			}
		}
	}
});

function insertData() {

	var queryParams = {
		ExpressionAttributeValues: {
			':id': {S: projectID}
		},
		KeyConditionExpression: 'ProjectID = :id',
		ProjectionExpression: 'ProjectID, ImageBG, YoutubeBG, Logo, PDF, ProjectStepImage1, ProjectStepImage2, ProjectStepImage3, ProjectStepImage4, ProjectStepImage5, ProjectStepImage6, ProjectStepImage7, ProjectStepImage8, ProjectStepImage9',
		TableName: 'Projects'
	};

	dynamodb.query(queryParams, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			var currentDate = new Date();
			var checkedTracks = $(".checked");
			var checkedCSV = "";
			for (var i = 0; i < checkedTracks.length; i++) {
				if (checkedTracks[i].getAttribute("id")) {
					checkedCSV += checkedTracks[i].getAttribute("id") + ",";
				}
				checkedCSV.replace(",null", "");
			}
			checkedCSV = checkedCSV.slice(0, -1);
			var hiringCSV = "";
			var hiringList = $(".project-hires__item.enabled");
			for (var i = 0; i < hiringList.length; i++) {
				hiringCSV += $(hiringList[i]).children().first().html() + ",";
			}
			hiringCSV = hiringCSV.slice(0, -1);
			if ($(".project-step-title4").length === 0) {
				var projectsteptitle4 = "";
			} else {
				var projectsteptitle4 = $(".project-step-title4").val();
			}
			if ($(".project-step-title5").length === 0) {
				var projectsteptitle5 = "";
			} else {
				var projectsteptitle5 = $(".project-step-title5").val();
			}
			if ($(".project-step-title6").length === 0) {
				var projectsteptitle6 = "";
			} else {
				var projectsteptitle6 = $(".project-step-title6").val();
			}
			if ($(".project-step-title7").length === 0) {
				var projectsteptitle7 = "";
			} else {
				var projectsteptitle7 = $(".project-step-title7").val();
			}
			if ($(".project-step-title8").length === 0) {
				var projectsteptitle8 = "";
			} else {
				var projectsteptitle8 = $(".project-step-title8").val();
			}
			if ($(".project-step-title9").length === 0) {
				var projectsteptitle9 = "";
			} else {
				var projectsteptitle9 = $(".project-step-title9").val();
			}
			if ($(".project-step-description4").length === 0) {
				var projectstepdescription4 = "";
			} else {
				var projectstepdescription4 = $(".project-step-description4").val();
			}
			if ($(".project-step-description5").length === 0) {
				var projectstepdescription5 = "";
			} else {
				var projectstepdescription5 = $(".project-step-description5").val();
			}
			if ($(".project-step-description6").length === 0) {
				var projectstepdescription6 = "";
			} else {
				var projectstepdescription6 = $(".project-step-description6").val();
			}
			if ($(".project-step-description7").length === 0) {
				var projectstepdescription7 = "";
			} else {
				var projectstepdescription7 = $(".project-step-description7").val();
			}
			if ($(".project-step-description8").length === 0) {
				var projectstepdescription8 = "";
			} else {
				var projectstepdescription8 = $(".project-step-description8").val();
			}
			if ($(".project-step-description9").length === 0) {
				var projectstepdescription9 = "";
			} else {
				var projectstepdescription9 = $(".project-step-description9").val();
			}
			if (typeof imageBGfiles !== 'undefined' && imageBGfiles.length) {
				var imageBGfile = imageBGfiles[0];
				var imageBGfileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(imageBGfile.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
				var youtubeBGURL = "";
			} else {
				if (data.Items[0].ImageBG.S !== "") {
					var imageBGfileNameURL = data.Items[0].ImageBG.S;
				} else {
					var imageBGfileNameURL = "";
				}
			}
			if ($("#youtubeID").length) {
				var youtubeBGURL = $("#youtubeID").val();
				var imageBGfileNameURL = "";
			} else {
				if (data.Items[0].YoutubeBG.S !== "") {
					var youtubeBGURL = data.Items[0].YoutubeBG.S;
				} else {
					var youtubeBGURL = "";
				}
			}
			if (typeof logofiles !== 'undefined' && logofiles.length) {
				var logofile = logofiles[0];
				var logofileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(logofile.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].Logo.S !== "") {
					var logofileNameURL = data.Items[0].Logo.S;
				} else {
					var logofileNameURL = "";
				}
			}
			if (typeof pdffiles !== 'undefined' && pdffiles.length) {
				var pdffile = pdffiles[0];
				var pdffileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(pdffile.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].PDF.S !== "") {
					var pdffileNameURL = data.Items[0].PDF.S;
				} else {
					var pdffileNameURL = "";
				}
			}
			if (stepfilesDict["step1"] !== "") {
				var step1file = stepfilesDict["step1"][0];
				var step1fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step1file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage1.S !== "") {
					var step1fileNameURL = data.Items[0].ProjectStepImage1.S;
				} else {
					var step1fileNameURL = "";
				}
			}
			if (stepfilesDict["step2"] !== "") {
				var step2file = stepfilesDict["step2"][0];
				var step2fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step2file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage2.S !== "") {
					var step2fileNameURL = data.Items[0].ProjectStepImage2.S;
				} else {
					var step2fileNameURL = "";
				}
			}
			if (stepfilesDict["step3"] !== "") {
				var step3file = stepfilesDict["step3"][0];
				var step3fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step3file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage3.S !== "") {
					var step3fileNameURL = data.Items[0].ProjectStepImage3.S;
				} else {
					var step3fileNameURL = "";
				}
			}
			if (stepfilesDict["step4"] !== "") {
				var step4file = stepfilesDict["step4"][0];
				var step4fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step4file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage4.S !== "") {
					var step4fileNameURL = data.Items[0].ProjectStepImage4.S;
				} else {
					var step4fileNameURL = "";
				}
			}
			if (stepfilesDict["step5"] !== "") {
				var step5file = stepfilesDict["step5"][0];
				var step5fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step5file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage5.S !== "") {
					var step5fileNameURL = data.Items[0].ProjectStepImage5.S;
				} else {
					var step5fileNameURL = "";
				}
			}
			if (stepfilesDict["step6"] !== "") {
				var step6file = stepfilesDict["step6"][0];
				var step6fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step6file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage6.S !== "") {
					var step6fileNameURL = data.Items[0].ProjectStepImage6.S;
				} else {
					var step6fileNameURL = "";
				}
			}
			if (stepfilesDict["step7"] !== "") {
				var step7file = stepfilesDict["step7"][0];
				var step7fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step7file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage7.S !== "") {
					var step7fileNameURL = data.Items[0].ProjectStepImage7.S;
				} else {
					var step7fileNameURL = "";
				}
			}
			if (stepfilesDict["step8"] !== "") {
				var step8file = stepfilesDict["step8"][0];
				var step8fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step8file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage8.S !== "") {
					var step8fileNameURL = data.Items[0].ProjectStepImage8.S;
				} else {
					var step8fileNameURL = "";
				}
			}
			if (stepfilesDict["step9"] !== "") {
				var step9file = stepfilesDict["step9"][0];
				var step9fileNameURL = "https://mindempathynet.s3.eu-central-1.amazonaws.com/" + encodeURIComponent(step9file.name + "-from-" + projectID).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
			} else {
				if (data.Items[0].ProjectStepImage9.S !== "") {
					var step9fileNameURL = data.Items[0].ProjectStepImage9.S;
				} else {
					var step9fileNameURL = "";
				}
			}
		    if (data.Items.length === 0) {
				var itemParams = {
					TableName: 'Projects',
					Item: {
						'ProjectID': {S: projectID},
						'Title': {S: $(".project-title").val()},
						'CreatedAt': {S: "" + currentDate.getUTCFullYear() + (currentDate.getUTCMonth()+1) + currentDate.getUTCDate() + currentDate.getUTCHours() + currentDate.getUTCMinutes() + currentDate.getUTCSeconds()},
						'Website': {S: $(".app-url").val()},
						'Description': {S: $(".project-tweet").val()},
						'ImageBG': {S: imageBGfileNameURL},
						'YoutubeBG': {S: youtubeBGURL},
						'Logo': {S: logofileNameURL},
						'Tracks': {S: checkedCSV},
						'Issue': {S: $(".the-issue").val()},
						'Solution': {S: $(".the-solution").val()},
						'ProjectStepImage1': {S: step1fileNameURL},
						'ProjectStepImage2': {S: step2fileNameURL},
						'ProjectStepImage3': {S: step3fileNameURL},
						'ProjectStepImage4': {S: step4fileNameURL},
						'ProjectStepImage5': {S: step5fileNameURL},
						'ProjectStepImage6': {S: step6fileNameURL},
						'ProjectStepImage7': {S: step7fileNameURL},
						'ProjectStepImage8': {S: step8fileNameURL},
						'ProjectStepImage9': {S: step9fileNameURL},
						'ProjectStepTitle1': {S: $(".project-step-title1").val()},
						'ProjectStepTitle2': {S: $(".project-step-title2").val()},
						'ProjectStepTitle3': {S: $(".project-step-title3").val()},
						'ProjectStepTitle4': {S: projectsteptitle4},
						'ProjectStepTitle5': {S: projectsteptitle5},
						'ProjectStepTitle6': {S: projectsteptitle6},
						'ProjectStepTitle7': {S: projectsteptitle7},
						'ProjectStepTitle8': {S: projectsteptitle8},
						'ProjectStepTitle9': {S: projectsteptitle9},
						'ProjectStepDescription1': {S: $(".project-step-description1").val()},
						'ProjectStepDescription2': {S: $(".project-step-description2").val()},
						'ProjectStepDescription3': {S: $(".project-step-description3").val()},
						'ProjectStepDescription4': {S: projectstepdescription4},
						'ProjectStepDescription5': {S: projectstepdescription5},
						'ProjectStepDescription6': {S: projectstepdescription6},
						'ProjectStepDescription7': {S: projectstepdescription7},
						'ProjectStepDescription8': {S: projectstepdescription8},
						'ProjectStepDescription9': {S: projectstepdescription9},
						'PDF': {S: pdffileNameURL},
						'Slides': {S: $(".upload-slides").val()},
						'Hiring': {S: hiringCSV},
						'FacebookURL': {S: $("#social_facebook").val()},
						'InstagramURL': {S: $("#social_google").val()},
						'TwitterURL': {S: $("#social_twitter").val()},
						'LinkedInURL': {S: $("#social_linkedin").val()},
						'PersonalNotes': {S: $(".personal-notes__textarea").val()}

					}
				};

				dynamodb.putItem(itemParams, function(err, data) {
					if (err) {
						console.log("Error", err);
					} else {
						console.log("Success", data);
						$("button.save").html("Save")
					}
				});
		    } else {
	    		var updateParams = {
				    TableName: "Projects",
				    Key:{
				        "ProjectID": {S: data.Items[0].ProjectID.S}
				    },
				    UpdateExpression: `set Title = :title, 
				    						Website = :website, 
				    						Description = :desc,
				    						ImageBG = :imagebg,
											YoutubeBG = :youtubebg,
											Logo = :logo,
				    						Tracks = :tracks, 
				    						Issue = :issue, 
				    						Solution = :solution,
				    						ProjectStepImage1 = :projectstepimage1,
				    						ProjectStepImage2 = :projectstepimage2,
				    						ProjectStepImage3 = :projectstepimage3,
				    						ProjectStepImage4 = :projectstepimage4,
				    						ProjectStepImage5 = :projectstepimage5,
				    						ProjectStepImage6 = :projectstepimage6,
				    						ProjectStepImage7 = :projectstepimage7,
				    						ProjectStepImage8 = :projectstepimage8,
				    						ProjectStepImage9 = :projectstepimage9,
				    						ProjectStepTitle1 = :projectsteptitle1,
				    						ProjectStepTitle2 = :projectsteptitle2,
				    						ProjectStepTitle3 = :projectsteptitle3,
				    						ProjectStepTitle4 = :projectsteptitle4,
				    						ProjectStepTitle5 = :projectsteptitle5,
				    						ProjectStepTitle6 = :projectsteptitle6,
				    						ProjectStepTitle7 = :projectsteptitle7,
				    						ProjectStepTitle8 = :projectsteptitle8,
				    						ProjectStepTitle9 = :projectsteptitle9,
				    						ProjectStepDescription1 = :projectstepdescription1,
				    						ProjectStepDescription2 = :projectstepdescription2,
				    						ProjectStepDescription3 = :projectstepdescription3,
				    						ProjectStepDescription4 = :projectstepdescription4,
				    						ProjectStepDescription5 = :projectstepdescription5,
				    						ProjectStepDescription6 = :projectstepdescription6,
				    						ProjectStepDescription7 = :projectstepdescription7,
				    						ProjectStepDescription8 = :projectstepdescription8,
				    						ProjectStepDescription9 = :projectstepdescription9,
				    						PDF = :pdf,
				    						Slides = :slides,
				    						Hiring = :hiring,
				    						FacebookURL = :facebook,
				    						InstagramURL = :instagram,
				    						TwitterURL = :twitter,
				    						LinkedInURL = :linkedin,
				    						PersonalNotes = :personalnotes`,
				    ExpressionAttributeValues:{
				    	":title": {S: $(".project-title").val()},
				        ":website": {S: $(".app-url").val()},
				        ":desc": {S: $(".project-tweet").val()},
				        ":imagebg": {S: imageBGfileNameURL},
						":youtubebg": {S: youtubeBGURL},
						":logo": {S: logofileNameURL},
				        ":tracks": {S: checkedCSV},
				        ":issue": {S: $(".the-issue").val()},
				        ":solution": {S: $(".the-solution").val()},
				        ":projectstepimage1": {S: step1fileNameURL},
						":projectstepimage2": {S: step2fileNameURL},
						":projectstepimage3": {S: step3fileNameURL},
						":projectstepimage4": {S: step4fileNameURL},
						":projectstepimage5": {S: step5fileNameURL},
						":projectstepimage6": {S: step6fileNameURL},
						":projectstepimage7": {S: step7fileNameURL},
						":projectstepimage8": {S: step8fileNameURL},
						":projectstepimage9": {S: step9fileNameURL},
				        ":projectsteptitle1": {S: $(".project-step-title1").val()},
						":projectsteptitle2": {S: $(".project-step-title2").val()},
						":projectsteptitle3": {S: $(".project-step-title3").val()},
						":projectsteptitle4": {S: projectsteptitle4},
						":projectsteptitle5": {S: projectsteptitle5},
						":projectsteptitle6": {S: projectsteptitle6},
						":projectsteptitle7": {S: projectsteptitle7},
						":projectsteptitle8": {S: projectsteptitle8},
						":projectsteptitle9": {S: projectsteptitle9},
						":projectstepdescription1": {S: $(".project-step-description1").val()},
						":projectstepdescription2": {S: $(".project-step-description2").val()},
						":projectstepdescription3": {S: $(".project-step-description3").val()},
						":projectstepdescription4": {S: projectstepdescription4},
						":projectstepdescription5": {S: projectstepdescription5},
						":projectstepdescription6": {S: projectstepdescription6},
						":projectstepdescription7": {S: projectstepdescription7},
						":projectstepdescription8": {S: projectstepdescription8},
						":projectstepdescription9": {S: projectstepdescription9},
						':pdf': {S: pdffileNameURL},
				        ':slides': {S: $(".upload-slides").val()},
				        ":hiring": {S: hiringCSV},
				        ":facebook": {S: $("#social_facebook").val()},
				        ":instagram": {S: $("#social_google").val()},
				        ":twitter": {S: $("#social_twitter").val()},
				        ":linkedin": {S: $("#social_linkedin").val()},
				        ":personalnotes": {S: $(".personal-notes__textarea").val()}
				    },
				    ReturnValues:"UPDATED_NEW"
				};
				dynamodb.updateItem(updateParams, function(err, data) {
				    if (err) {
				        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
				    } else {
				        //console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
				        console.log("UpdateItem succeeded");
				        $("button.save").html("Save")
				    }
				});
		    }
		}
	});
}

$("button.save").click( function() {
	$("button.save").html("Saving...");
	if (typeof imageBGfiles !== 'undefined' && imageBGfiles.length) {
		var imageBGfile = imageBGfiles[0];
		var imageBGfileName = imageBGfile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "mindempathynet",
				Key: imageBGfileName + "-from-" + projectID,
				Body: imageBGfile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded background photo.");
			},
			function(err) {
				console.log("There was an error uploading your photo: ", err.message);
			}
		);
	}

	if (typeof logofiles !== 'undefined' && logofiles.length) {
		var logofile = logofiles[0];
		var logofileName = logofile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "mindempathynet",
				Key: logofileName + "-from-" + projectID,
				Body: logofile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded logo.");
			},
			function(err) {
				console.log("There was an error uploading the logo: ", err.message);
			}
		);
	}

	if (typeof pdffiles !== 'undefined' && pdffiles.length) {
		var pdffile = pdffiles[0];
		var pdffileName = pdffile.name;
		var upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: "mindempathynet",
				Key: pdffileName + "-from-" + projectID,
				Body: pdffile,
				ACL: "public-read"
			}
		});
		var promise = upload.promise();
		promise.then(
			function(data) {
				console.log("Successfully uploaded PDF.");
			},
			function(err) {
				console.log("There was an error uploading the PDF: ", err.message);
			}
		);
	}

	for (var i = 1; i < 10; i++) {
		if (stepfilesDict["step"+i] !== "") {
			var stepfile = stepfilesDict["step"+i][0];
			var stepfileName = stepfile.name;
			var upload = new AWS.S3.ManagedUpload({
				params: {
					Bucket: "mindempathynet",
					Key: stepfileName + "-from-" + projectID,
					Body: stepfile,
					ACL: "public-read"
				}
			});
			var promise = upload.promise();
			promise.then(
				function(data) {
					console.log("Successfully uploaded step.");
				},
				function(err) {
					console.log("There was an error uploading the step: ", err.message);
				}
			);
		}
	}

	dynamodb.listTables({Limit: 10}, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			var projectsTableFound = false;
			for (var i = 0; i < data.TableNames.length; i++) {
				tableName = data.TableNames[i]
				if (tableName === 'Projects') {
					projectsTableFound = true;
				}
			}
			if (projectsTableFound === false) {
				var tableParams = {
					AttributeDefinitions: [
					{
						AttributeName: 'ProjectID',
						AttributeType: 'S'
					}
					],
					KeySchema: [
					{
						AttributeName: 'ProjectID',
						KeyType: 'HASH'
					}
					],
					ProvisionedThroughput: {
						ReadCapacityUnits: 1,
						WriteCapacityUnits: 1
					},
					TableName: 'Projects',
					StreamSpecification: {
						StreamEnabled: false
					}
				};

				dynamodb.createTable(tableParams, function(err, data) {
					if (err) {
						console.log("Error", err);
					} else {
						console.log("Table Created", data);

						dynamodb.waitFor('tableExists', {TableName: 'Projects'}, (err, data) => {
					        if (err) console.log(err, err.stack);
					        else insertData();
					    });
					}
				});
			} else {
				insertData();
			}
		}
	});
});

$("button.view").click( function() {
	window.location.href = "/viewmode";
});

$(".idt-switch").click( function() {
	$(".idt-switch__inner").toggleClass("on");
	$(".idt-switch__inner").toggleClass("off");
	$(".idt-switch__btn").toggleClass("on");
	$(".idt-switch__btn").toggleClass("off");

	$.ajax({
             type : "POST",
             dataType : "json",
             url : "https://mindempathy.net/wp-json/wp/v2/posts/",
             data : {_wpnonce: nonce, title: $(".project-title").val(), status: "publish", content: `<!DOCTYPE html>
						<html lang="en" style="--vh:6.21px;">
						    <head>
						        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
						        <style class="vjs-styles-defaults">
						            .video-js {
						            width: 300px;
						            height: 150px;
						            }
						            .vjs-fluid {
						            padding-top: 56.25%
						            }
						        </style>
						        <style type="text/css">@charset "UTF-8"</style>
						        <meta http-equiv="X-UA-Compatible" content="IE=edge">
						        <meta content="yes" name="apple-mobile-web-app-capable">
						        <meta content="minimum-scale=1.0, width=device-width, maximum-scale=1, user-scalable=no" name="viewport">
						        <meta name="robots" content="index, follow">
						        <title>Add idea - <?php bloginfo( 'name' ) ?></title>
						        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/css/app.css">
						        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/css/css2.css">
						        <style>
						            :root {
						            --main-color-hue: 360;
						            --main-color-saturation: 60%;
						            --main-color-lightness: 50%;
						            --title-font-family: Alata, serif;
						            --text-font-family: Roboto, sans-serif;
						            }
						            .Ideas {
						            	color: #ff0007;
						            }
						        </style>
						        <meta name="title" content="<?php bloginfo( 'name' ) ?>">
						        <style id="vue-line-clamp">.vue-line-clamp{
						            display: block;
						            display: -webkit-box;
						            -webkit-box-orient: vertical;
						            overflow: hidden;
						            word-break: break-all;
						            text-overflow: ellipsis;
						            }
						        </style>
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/ck.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/ot.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/vue.css">
						        <link href="/wp-content/themes/MindEmpathy-wp/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
						        <link href="/wp-content/themes/MindEmpathy-wp/static/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
						        <link href='https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic' rel='stylesheet' type='text/css'>
						        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' rel='stylesheet' type='text/css'>
						        <link rel="stylesheet" href="/wp-content/themes/MindEmpathy-wp/static/fonts/font-awesome.min.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/boffi.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/style.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/static.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/dipaolo.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/dipaolo2.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/header.css">
						        <link href="/wp-content/themes/MindEmpathy-wp/static/css/clean-blog.css" rel="stylesheet">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/lago.css">
						        <link rel="stylesheet" type="text/css" href="/wp-content/themes/MindEmpathy-wp/static/css/lago-style.css">
						        <script src="/wp-content/themes/MindEmpathy-wp/static/js/main.js"></script>
						        <script src="https://kit.fontawesome.com/4c0b3ae1d6.js" crossorigin="anonymous"></script>
						        <script type="text/javascript">var projectID = `+projectID+`;</script>
						    </head>
						    <body id="app" class="">
						    	<div id="sidebar-section-peripherial">
						    		<?php get_sidebar(); ?>
								    <idt-page>
								    	<div class="page__content">
								        	<div class="project"> 
								            	<form name="form" novalidate="" class="ng-pristine ng-valid">
								                	<div class="project-banner" style="background-image: url();">
									                    <div class="project-intro">
									                        <div class="row">
									                            <div class="column small-12 medium-2 text-center">
									                                <div class="project-intro__logo"> <img src=""> </div>
									                            </div>
									                            <div class="column small-12 medium-7 project-banner__col-content">
									                                <div class="project-intro__title"></div>
									                                <div class="project-intro__pitch"></div>
									                                <div class="project-categories">
																	    <div class="project-category">
																	        <div class="project-category__title"> Tracks </div>
																	        <div class="project-category__options">
																	        </div>
																	    </div>
																	</div>
									                            </div>
									                            <div class="column small-12 medium-3 text-center"></div>
									                        </div>
									                    </div>
									                </div>
									                <div class="project-content">
									                    <div class="row">
									                        <div class="column small-12">
									                            <h2 class="project-section__title title--line"> <span class="project-section__title-icon icon--content">
									                            	<div class="idt-icon">
						                                                <i class="far fa-lightbulb" style="color: white;position: relative;top: 6px;"></i>
						                                            </div>
									                            </span> <br> <span>About the Idea</span> </h2>
									                        </div>
									                    </div>
									                    <div class="row align-center">
									                        <div class="column small-12 large-8">
									                            <div class="project-post post--issue">
									                                <h3 class="project-post__title title--issue"> <span class="project-post__title-vertical title-vertical--issue">the</span> Issue </h3>
									                                <div class="project-post__content"></div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="row align-center">
									                        <div class="column small-12 large-8">
									                            <div class="project-post post--solution">
									                                <div class="row align-middle">
									                                    <div class="column small-12 medium-5">
									                                        <h3 class="project-post__title title--solution" style="line-height:100%"> Our Magic Solution </h3>
									                                    </div>
									                                    <div class="column small-12 medium-7">
										                                    <div class="project-post__content align-left"></div>
									                                    </div>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="container">
									                        <div class="row align-center">
									                            <div class="column small-12 medium-10">
									                                <div class="project-post post--hiw">
									                                    <h3 class="project-post__title title--hiw">How it works</h3>
									                                    <ul class="project-hiw__list list--3">
									                                        <li class="project-hiw__list-item project-hiw__list-item1">
									                                            <div class="project-hiw">
									                                                <div class="project-hiw__wrap-image">
									                                                    <img class="project-hiw__image" src=""> 
									                                                    <div class="project-hiw__number">1</div>
									                                                </div>
									                                                <div class="project-hiw__title"></div>
									                                                <p class="project-hiw__content"></p>
									                                            </div>
									                                        </li>
									                                        <li class="project-hiw__list-item project-hiw__list-item2">
									                                            <div class="project-hiw">
									                                                <div class="project-hiw__wrap-image">
									                                                    <img class="project-hiw__image" src=""> 
									                                                    <div class="project-hiw__number">2</div>
									                                                </div>
									                                                <div class="project-hiw__title"></div>
									                                                <p class="project-hiw__content"></p>
									                                            </div>
									                                        </li>
									                                        <li class="project-hiw__list-item project-hiw__list-item3">
									                                            <div class="project-hiw">
									                                                <div class="project-hiw__wrap-image">
									                                                    <img class="project-hiw__image" src=""> 
									                                                    <div class="project-hiw__number">3</div>
									                                                </div>
									                                                <div class="project-hiw__title"></div>
									                                                <p class="project-hiw__content"></p>
									                                            </div>
									                                        </li>
									                                    </ul>
									                                </div>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="project-presentation">
									                        <div class="row">
									                            <div class="column small-12">
									                                <h2 class="project-section__title title--slideshare"> <span class="project-section__title-icon icon--slideshare">
									                                	<div class="idt-icon">
						                                                    <i class="far fa-comment" style="color: white;position: relative;top: 2px;"></i>
						                                                </div>
									                                </span> <br> <span>Presentation</span> </h2>
									                                <div class="embed-responsive embed-responsive-autosize project-presentation__slideshare"></div>
									                                <style>
																	  .embed-responsive {
																	    position: relative;
																	    padding-bottom: 56.25%; /* 16:9 Ratio */
																	    height: 0;
																	    overflow: hidden;
																	  }
																	  .embed-responsive iframe {
																	    border: 0;
																	    position: absolute;
																	    top: 0;
																	    left: 0;
																	    width: 100% !important;
																	    height: 100% !important;
																	  }
																	</style>
									                            </div>
									                        </div>
									                    </div>
									                    <div class="project-team">
									                        <div class="row">
									                            <div class="column small-12">
									                                <h2 class="project-section__title title--team title--line">
									                                	<span class="project-section__title-icon icon--team">
									                                		<div class="idt-icon">
							                                                    <i class="fas fa-users" style="color: white;position: relative;top: 5px;"></i>
							                                                </div>
									                                	</span>
									                                	<br>
									                                	<span>Our team</span>
									                                </h2>
									                                <p class="text-center"> No teammates yet </p>
									                            </div>
									                            <div class="column small-12">
									                                <hr>
									                                <ul class="project-hires public" id="hiring">
									                                </ul>
									                            </div>
									                        </div>
									                    </div>
									                </div>
									            </form>
									        </div>
									    </div>
									</idt-page>
									<?php get_footer(); ?>
						    	</div>
								<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
								<script id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
								<script src="/wp-content/themes/MindEmpathy-wp/static/js/jquery.js"></script>
								<script src="https://sdk.amazonaws.com/js/aws-sdk-2.766.0.min.js"></script>
								<script src="/wp-content/themes/MindEmpathy-wp/static/js/clean-blog.js"></script>
								<script src="/wp-content/themes/MindEmpathy-wp/static/js/sidebar.js"></script>
								<script src="/wp-content/themes/MindEmpathy-wp/static/js/viewideas.js"></script>
							</body>
						</html>`},
             error: function(error) {
             	console.log("Error while publishing project: " + error);
             },
             success: function(response) {
               console.log("Project published.");
            }
        });   

});