const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
	service: "gmail",
	auth:{
    user:"alimagdi12367@gmail.com",
    pass:"aimorddjdtspxute"
}
})
exports.getReservation=(req,res,next)=>{
	res.render('../views/user/Reservation.ejs',{pageTitle:'reservation'})
}
exports.postMail = (req,res,next)=>{
	const name = req.body.name;
	const phone = req.body.phone;
	const room = req.body.room;
	const guests = req.body.guests;
	const arrivalDate = req.body.arrivalDate;
	const departureDate = req.body.departureDate;
	const email = req.body.email;
	const cardHolderName = req.body.cardHolderName;
	const cvv = req.body.cvv;
	const cardNumber = req.body.cardNumber;
	const expirationDate = [req.body.mm,req.body.yy];
	const reservation = {name,phone,room,guests,arrivalDate,departureDate,email,cardHolderName,cvv,cardNumber,expirationDate}
	const mailOptions={
	from:"alimagdi12367@gmail.com",
	to:"muhmd.gamal97@gmail.com",
	html:`<!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">

<head>
	<title></title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
	<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		.desktop_hide,
		.desktop_hide table {
			mso-hide: all;
			display: none;
			max-height: 0px;
			overflow: hidden;
		}

		.image_block img+div {
			display: none;
		}

		@media (max-width:520px) {
			.desktop_hide table.icons-inner {
				display: inline-block !important;
			}

			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.image_block img.big,
			.row-content {
				width: 100% !important;
			}

			.mobile_hide {
				display: none;
			}

			.stack .column {
				width: 100%;
				display: block;
			}

			.mobile_hide {
				min-height: 0;
				max-height: 0;
				max-width: 0;
				overflow: hidden;
				font-size: 0px;
			}

			.desktop_hide,
			.desktop_hide table {
				display: table !important;
				max-height: none !important;
			}
		}
	</style>
</head>

<body style="background-image: url(https://fe3e6fdca5.imgdist.com/public/users/Integrators/BeeProAgency/1010847_995714/11.jpg) ; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
	<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/77.jpg');   background-repeat: no-repeat;    background-size: 90%;	">
		<tbody>
			<tr>
				<td>
					<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500" >
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
															</td>
														</tr>
													</table>
													<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="text-align:center;width:100%;">
																<h1 style=" margin-top: 120px; font-size: 45px;  color: #982b2b; direction: ltr; font-family: Arial,
																 'Helvetica Neue', Helvetica, sans-serif; font-size: 23px; font-weight: 700; letter-spacing: normal; line-height: 120%; 
																 text-align: center; "><span class="tinyMce-placeholder">Reservation Form</span></h1>
															</td>
														</tr>
													</table>
													<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
														<tr>
															<td class="pad">
																
															</td>
														</tr>
													</table><!--[if mso]><style>#list-r0c0m3 ul{margin: 0 !important; padding: 0 !important;} #list-r0c0m3 ul li{mso-special-format: bullet;}#list-r0c0m3 .levelOne li {margin-top: 0 !important;} #list-r0c0m3 .levelOne {margin-left: -20px !important;}#list-r0c0m3 .levelTwo li {margin-top: 0 !important;} #list-r0c0m3 .levelTwo {margin-left: 20px !important;}#list-r0c0m3 .levelThree li {margin-top: 0 !important;} #list-r0c0m3 .levelThree {margin-left: 60px !important;}#list-r0c0m3 .levelFour li {margin-top: 0 !important;} #list-r0c0m3 .levelFour {margin-left: 100px !important;}#list-r0c0m3 .levelFive li {margin-top: 0 !important;} #list-r0c0m3 .levelFive {margin-left: 140px !important;}#list-r0c0m3 .levelSix li {margin-top: 0 !important;} #list-r0c0m3 .levelSix {margin-left: 180px !important;}#list-r0c0m3 .levelSeven li {margin-top: 0 !important;} #list-r0c0m3 .levelSeven {margin-left: 220px !important;}#list-r0c0m3 .levelEight li {margin-top: 0 !important;} #list-r0c0m3 .levelEight {margin-left: 260px !important;}#list-r0c0m3 .levelNine li {margin-top: 0 !important;} #list-r0c0m3 .levelNine {margin-left: 300px !important;}</style><![endif]-->
													

													<div  style="border: 1px solid black; background-image: url('https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/Logo2.png'); background-repeat: no-repeat; background-position: center; 
																		background-size: 100%; font-weight: bold;
																	  width:300px; height: 600px;  margin: auto;  text-align: center; margin-top: 70px;"  >
																		
																		<h1 style="color:#85714D ;">Guest Details </h1>
																	  
																		<table class="list_block block-4" id="list-r0c0m3" width="100%"  cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			<td class="pad">
																			  <div class="levelOne" style="margin-left: 0;">
																				<ul class="leftList" start="1" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; color: #000000; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 16.8px; list-style-type: disc;">
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Name : ${name}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Phone : ${phone}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Room : ${room}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Guests : ${guests}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Arrival Date : ${arrivalDate}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Departure Date : ${departureDate}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Email : ${email}</li>
																				</ul>
																			  </div>
																			</td>
																		  </tr>
																		</table>
																  
																  
																  
																		<table class="list_block block-6" id="list-r0c0m5" width="100%" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			<td class="pad">
																			  <div class="levelOne" style="margin-left: 0;">
																				<ul class="leftList" start="1" style="padding: 20px;  margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; color: #000000; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 16.8px; list-style-type: disc;">
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Card Holder Name : ${cardHolderName}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Card Number : ${cardNumber}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Expiration Date : ${expirationDate}</li>
																				</ul>
																			  </div>
																			</td>
																		  </tr>
																		</table>
																  
																	  
																		</div>
																  
																	</div>












												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
					<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
						<tbody>
							<tr>
								<td>
									<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
										<tbody>
											<tr>
												<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
													<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
														<tr>
															<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																	<tr>
																		<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																			<!--[if !vml]><!-->
																			
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</table>
												</td>
											</tr>
										</tbody>
									</table>
								</td>
							</tr>
						</tbody>
					</table>
				</td>
			</tr>
		</tbody>
	</table><!-- End -->
</body>

</html>`
	}
	transporter.sendMail(mailOptions,(err,info)=>{
	if(err){
		console.log(err)
	}else{
		console.log("Email Sent : " + info.response)
	}
	})

	const mailResponse={
		from:"alimagdi12367@gmail.com",
		to:email,
		html:`<!DOCTYPE html>
		<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
		
		<head>
			<title></title>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
			<style>
				* {
					box-sizing: border-box;
				}
		
				body {
					margin: 0;
					padding: 0;
				}
		
				a[x-apple-data-detectors] {
					color: inherit !important;
					text-decoration: inherit !important;
				}
		
				#MessageViewBody a {
					color: inherit;
					text-decoration: none;
				}
		
				p {
					line-height: inherit
				}
		
				.desktop_hide,
				.desktop_hide table {
					mso-hide: all;
					display: none;
					max-height: 0px;
					overflow: hidden;
				}
		
				.image_block img+div {
					display: none;
				}
		
				@media (max-width:520px) {
					.desktop_hide table.icons-inner {
						display: inline-block !important;
					}
		
					.icons-inner {
						text-align: center;
					}
		
					.icons-inner td {
						margin: 0 auto;
					}
		
					.image_block img.big,
					.row-content {
						width: 100% !important;
					}
		
					.mobile_hide {
						display: none;
					}
		
					.stack .column {
						width: 100%;
						display: block;
					}
		
					.mobile_hide {
						min-height: 0;
						max-height: 0;
						max-width: 0;
						overflow: hidden;
						font-size: 0px;
					}
		
					.desktop_hide,
					.desktop_hide table {
						display: table !important;
						max-height: none !important;
					}
				}
			</style>
		</head>
		
		<body style="background-image: url() ; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
			<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/44%20%281%29.png');   background-repeat: no-repeat;    background-size: 110%;	">
				<tbody>
					<tr>
						<td>
							<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500" >
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																	</td>
																</tr>
															</table>
															<table class="heading_block block-2" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																
															</table>
															<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																
															</table><!--[if mso]><style>#list-r0c0m3 ul{margin: 0 !important; padding: 0 !important;} #list-r0c0m3 ul li{mso-special-format: bullet;}#list-r0c0m3 .levelOne li {margin-top: 0 !important;} #list-r0c0m3 .levelOne {margin-left: -20px !important;}#list-r0c0m3 .levelTwo li {margin-top: 0 !important;} #list-r0c0m3 .levelTwo {margin-left: 20px !important;}#list-r0c0m3 .levelThree li {margin-top: 0 !important;} #list-r0c0m3 .levelThree {margin-left: 60px !important;}#list-r0c0m3 .levelFour li {margin-top: 0 !important;} #list-r0c0m3 .levelFour {margin-left: 100px !important;}#list-r0c0m3 .levelFive li {margin-top: 0 !important;} #list-r0c0m3 .levelFive {margin-left: 140px !important;}#list-r0c0m3 .levelSix li {margin-top: 0 !important;} #list-r0c0m3 .levelSix {margin-left: 180px !important;}#list-r0c0m3 .levelSeven li {margin-top: 0 !important;} #list-r0c0m3 .levelSeven {margin-left: 220px !important;}#list-r0c0m3 .levelEight li {margin-top: 0 !important;} #list-r0c0m3 .levelEight {margin-left: 260px !important;}#list-r0c0m3 .levelNine li {margin-top: 0 !important;} #list-r0c0m3 .levelNine {margin-left: 300px !important;}</style><![endif]-->
															<table class="list_block block-4" id="list-r0c0m3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																<tr>
																	<td class="pad">
																		<div class="levelOne" style="margin-left: 0; margin-top:50px; ">



																		<div style=" text-align: center;">
    
    
																		<div style="margin: auto; ">
																		  <img src="https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/logo.png" alt=""  width="200px" height="200px"  >
																  
																		  <h1 style="color: #6f2c3f;"> We are always happy to have you with us at the  <br>
																			<!-- <span style=" margin-top: 10px; color: #85714D;">Resta Port Said Hotel</span> </h1> -->
																  
																		  <h3 style="color: #6f2c3f;">Your reservation has been received and waiting for you :)</h3>
																		  
																  
																		</div>
																  
																	  
																		<div  style="border: 1px solid black; background-image: url('https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/Logo2.png'); background-repeat: no-repeat; background-position: center; 
																		background-size: 100%; font-weight: bold;
																	  width:300px; height: 500px;  margin: auto;  text-align: center; margin-top: 70px;"  >
																		
																		<h1 style="color:#85714D ;">Your Reservation Details </h1>
																	  
																		<table class="list_block block-4" id="list-r0c0m3" width="100%"  cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			<td class="pad">
																			  <div class="levelOne" style="margin-left: 0;">
																				<ul class="leftList" start="1" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; color: #000000; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 16.8px; list-style-type: disc;">
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Name : ${name}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Phone : ${phone}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Room : ${room}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Guests : ${guests}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Arrival Date : ${arrivalDate}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Departure Date : ${departureDate}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Email : ${email}</li>
																				</ul>
																			  </div>
																			</td>
																		  </tr>
																		</table>
																  
																  
																  
																		<table class="list_block block-6" id="list-r0c0m5" width="100%" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
																		  <tr>
																			<td class="pad">
																			  <div class="levelOne" style="margin-left: 0;">
																				<ul class="leftList" start="1" style="padding: 20px;  margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; color: #000000; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 16.8px; list-style-type: disc;">
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Card Holder Name : ${cardHolderName}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Card Number : ${cardNumber}</li>
																				  <li style="margin-top: 12px; list-style-type: none; font-size: 18px; margin-bottom: 0; text-align: left;">Expiration Date : ${expirationDate}</li>
																				</ul>
																			  </div>
																			</td>
																		  </tr>
																		</table>
																  
																	  
																		</div>
																  
																	</div>







																		


					
																		</div>
																	</td>
																</tr>
															</table>
															
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
							<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
								<tbody>
									<tr>
										<td>
											<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
												<tbody>
													<tr>
														<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
															<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																<tr>
																	<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																		<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																			<tr>
																				<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																					<!--[if !vml]><!-->
																					
																				</td>
																			</tr>
																		</table>
																	</td>
																</tr>
															</table>
														</td>
													</tr>
												</tbody>
											</table>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</tbody>
			</table><!-- End -->
		</body>
		
		</html>`	}
	transporter.sendMail(mailResponse,(err,info)=>{
		if(err){
			console.log(err)
		}else{
			console.log("Email Sent : " + info.response)
		}
		});



		
		res.redirect('/reservation') ; 
}

exports.getContact = (req,res,next)=>{
    res.render('../views/user/contact')
}



		// -------------------- Contact us Section -----------------------------


exports.postContactMail = (req,res,next)=>{
	const name = req.body.name;
	const email = req.body.email;
	const subject = req.body.subject;
	const message = req.body.message;
	const contact = {name,subject,email,message}
	const mailOptions={
	from:"alimagdi12367@gmail.com",
	to:"muhmd.gamal97@gmail.com",
	// text : 
	// "Contact-Us ----- " + 
	// "Name :" + JSON.stringify(contact.name) + 
	// "E-mail : " + JSON.stringify(contact.email) + 
	// "Subject : " + JSON.stringify(contact.subject) + 
	// "Message : " + JSON.stringify(contact.message) ,

	html:`<!DOCTYPE html>
	<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
	
	<head>
		<title></title>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0"><!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
		<style>
			* {
				box-sizing: border-box;
			}
	
			body {
				margin: 0;
				padding: 0;
			}
	
			a[x-apple-data-detectors] {
				color: inherit !important;
				text-decoration: inherit !important;
			}
	
			#MessageViewBody a {
				color: inherit;
				text-decoration: none;
			}
	
			p {
				line-height: inherit
			}
	
			.desktop_hide,
			.desktop_hide table {
				mso-hide: all;
				display: none;
				max-height: 0px;
				overflow: hidden;
			}
	
			.image_block img+div {
				display: none;
			}
	
			@media (max-width:520px) {
				.desktop_hide table.icons-inner {
					display: inline-block !important;
				}
	
				.icons-inner {
					text-align: center;
				}
	
				.icons-inner td {
					margin: 0 auto;
				}
	
				.image_block img.big,
				.row-content {
					width: 100% !important;
				}
	
				.mobile_hide {
					display: none;
				}
	
				.stack .column {
					width: 100%;
					display: block;
				}
	
				.mobile_hide {
					min-height: 0;
					max-height: 0;
					max-width: 0;
					overflow: hidden;
					font-size: 0px;
				}
	
				.desktop_hide,
				.desktop_hide table {
					display: table !important;
					max-height: none !important;
				}
			}
		</style>
	</head>
	
	<body style="background-image: url(https://fe3e6fdca5.imgdist.com/public/users/Integrators/BeeProAgency/1010847_995714/11.jpg) ; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
		<table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-image: url('https://3c68e6eb09.imgdist.com/public/users/Integrators/BeeProAgency/1049037_1034209/77.jpg');   background-repeat: no-repeat;    background-size: 90%;	">
			<tbody>
				<tr>
					<td>
						<table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							<tbody>
								<tr>
									<td>
										<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500" >
											<tbody>
												<tr>
													<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														<table class="image_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															<tr>
																<td class="pad" style="width:100%;padding-right:0px;padding-left:0px;">
																</td>
															</tr>
														</table>

														<table class="paragraph_block block-3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															<tr>
																<td class="pad" >
																	<div style="color:#a33131;direction:ltr;font-family:Arial, 'Helvetica Neue', Helvetica, sans-serif;font-size:16px;font-weight:400;letter-spacing:0px;line-height:120%;text-align:center;mso-line-height-alt:19.2px;">
																		<p style="margin: 0; color: #85714D; margin-top: 120px; font-size: 35px;">Guest Contact </p>
																	</div>
																</td>
															</tr>
														</table><!--[if mso]><style>#list-r0c0m3 ul{margin: 0 !important; padding: 0 !important;} #list-r0c0m3 ul li{mso-special-format: bullet;}#list-r0c0m3 .levelOne li {margin-top: 0 !important;} #list-r0c0m3 .levelOne {margin-left: -20px !important;}#list-r0c0m3 .levelTwo li {margin-top: 0 !important;} #list-r0c0m3 .levelTwo {margin-left: 20px !important;}#list-r0c0m3 .levelThree li {margin-top: 0 !important;} #list-r0c0m3 .levelThree {margin-left: 60px !important;}#list-r0c0m3 .levelFour li {margin-top: 0 !important;} #list-r0c0m3 .levelFour {margin-left: 100px !important;}#list-r0c0m3 .levelFive li {margin-top: 0 !important;} #list-r0c0m3 .levelFive {margin-left: 140px !important;}#list-r0c0m3 .levelSix li {margin-top: 0 !important;} #list-r0c0m3 .levelSix {margin-left: 180px !important;}#list-r0c0m3 .levelSeven li {margin-top: 0 !important;} #list-r0c0m3 .levelSeven {margin-left: 220px !important;}#list-r0c0m3 .levelEight li {margin-top: 0 !important;} #list-r0c0m3 .levelEight {margin-left: 260px !important;}#list-r0c0m3 .levelNine li {margin-top: 0 !important;} #list-r0c0m3 .levelNine {margin-left: 300px !important;}</style><![endif]-->
														<table class="list_block block-4" id="list-r0c0m3" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
															<tr>
																<td class="pad">
																	<div class="levelOne" style="margin-left: 0; margin-top:50px; ">
																		<ul class="leftList" start="1" style="margin-top: 0; margin-bottom: 0; padding: 0; padding-left: 20px; color: #000000; direction: ltr; font-family: Arial,'Helvetica Neue',Helvetica,sans-serif; font-size: 14px; font-weight: 400; letter-spacing: 0; line-height: 120%; text-align: left; mso-line-height-alt: 16.8px; list-style-type: disc;">
																			<li style="list-style-type: none;     margin-bottom: 0; text-align: left; text-decoration: none ; font-size: 18px ;  margin-top: 20px;">Name : ${name}</li>
																			<li style="list-style-type: none;     margin-bottom: 0; text-align: left; text-decoration: none ; font-size: 18px ;  margin-top: 20px;">E-Mail : ${email}</li>
																			<li style="list-style-type: none;      margin-bottom: 0; text-align: left; text-decoration: none ; font-size: 18px ; margin-top: 20px;">Subject : ${subject}</li>
																			<li style="list-style-type: none;  margin-bottom: 0; text-align: left; text-decoration: none ; font-size: 18px ; margin-top: 20px;">Message : ${message}</li>
																		</ul>
																	</div>
																</td>
															</tr>
														</table>
														
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
						<table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
							<tbody>
								<tr>
									<td>
										<table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 500px;" width="500">
											<tbody>
												<tr>
													<td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
														<table class="icons_block block-1" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
															<tr>
																<td class="pad" style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																	<table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
																		<tr>
																			<td class="alignment" style="vertical-align: middle; text-align: center;"><!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				<!--[if !vml]><!-->
																				
																			</td>
																		</tr>
																	</table>
																</td>
															</tr>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</td>
				</tr>
			</tbody>
		</table><!-- End -->
	</body>
	
	</html>`	


	}
	transporter.sendMail(mailOptions,(err,info)=>{
	if(err){
		console.log(err)
	}else{
		console.log("Email Sent : " + info.response)
	}
	})
	res.redirect('/contact')
}
