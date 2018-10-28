#  There are the differences between the native app、web app and hybrid app.
Firstly,what is an app ?

> App is an abbreviation of the English word Application (**Application program**: a software program capable of performing certain functions).It can be understood as a third-party application installed under some system.The human word is: software.With the continuous development and growth of the mobile Internet, the applications on the smart phone system are constantly developing in a blowout way, and the mobile apps are entering people's life unprecedented in type and quantity.So now when I say App, it's usually a **third-party software program** under IOS and Android.


The structure of this paper is mainly divided into the following parts:

> 1. The classification of the app
> 2. The definition of each type of app, and what are the 
 specific types of apps
> 3. Advantages and disadvantages of various apps
> 4. What kind of app should be used in the specific development process

## 1.The classification of the app

It can be roughly divided into these three types:
> Native app (native app)
> A web app
> Hybrid app

![picture-0f-three-kind-apps](https://upload-images.jianshu.io/upload_images/1668945-eebff27c68f3e4db.png)

## 2.Definition of three types of apps

### 2.1 native app 

![native](http://image.woshipm.com/wp-files/2016/04/appkeutuie.jpg)

The Chinese name is "native app".Let's take a look at the definition of baidu encyclopedia: third-party applications based on the local operating systems of smart phones, such as iOS, Android and WP, and written and run with native programs. Generally developed languages are Java, C++, etc.The specific expression on the use is that the graph on the desktop is basically a native app.
![native](http://image.woshipm.com/wp-files/2016/04/559443-6bb5e01ed2bfb2c0.png)

### 2.2 web app

Still take a look at the definition of baidu encyclopedia: web-based systems and applications running on the web and browser, currently mostly developed using the h5 standard.The specific performance on use is that when the mobile browser is clicked to enter, there will be some small ICONS of the app. After clicking, the page loaded in the browser is the same as the page opened after you directly download an app. These little ICONS represent the web app.

### 2.3 hybrid app

The Chinese name is "mixed app".As the name implies, it is a mixture of native app and web app.A browser is built in the native app, and the appropriate functional pages are rendered in the form of web pages.For example, some marketing pages of jd.com, some news pages of today's headlines, and content pages of tencent news of WeChat.

## 3.Advantages and disadvantages of various apps

### 3.1 native app

Advantages:

>* Provide the best user experience, the best user interface, smooth interaction
>* Local resources can be accessed
>* Mobile hardware devices, such as cameras and microphones, can be called

Disadvantages:

>* High development costs.Each mobile operating system needs independent development projects to provide different  experiences for different platforms.
>* Slow release of new releases.Downloads are user controlled, and many users don't want to download updates (for example, there are still many 1.0 users and you may have to maintain the 1.0 API).
>* App store release review cycle is long.Android takes between one and three days, while iOS takes longer

### 3.2 web app

![web_app](https://img.zcool.cn/community/01d309558268fd000000b18f720072.jpg@1280w_1l_2o_100sh.jpg)

Advantages:

>* No need to install the package, saving mobile phone space
>* Overall light weight, low development cost
>* The user is not required to update manually, but the app developer will update directly in the background, and the new version will be pushed to the user, which is more convenient for business development
>* Browser-based, cross-platform

Disadvantages:

>* The page jumps arduous, unsteady sense is stronger.When the speed of the network is limited, there are many times when the card or card dead phenomenon, interaction effect is limited
>* Security is relatively low and data can be easily compromised or hijacked


### 3.3 Hybrid app

Such apps combine the advantages of the above two apps:

>* On the premise of realizing more functions, the app installation package should not be too large
>* Open a web page within the application without the hassle of jumping to the browser
>* When the main functional areas are relatively stable, the added functional areas adopt web form, which makes the iteration more convenient
>* The web page will be presented in different forms when users set different network formats. (for example, WeChat friend circle is taken as an example. Under the data flow, when APNS is set as WAP, WeChat subscription will block pictures and video.This saves users some traffic and makes the whole page less friendly to read.)

Also, why do some native apps make web apps?
There's an example. Here are the ICONS of several web apps that come with my mobile browser

![ICONS of several web apps](http://img.mp.itc.cn/upload/20170220/18f3ee4356da42b59983b80727cda806_th.jpg)

There are several reasons:

>* Data can be caught by search engine crawlers and indexed.If the product has only one app, its entrance is independent, but the data is also closed.If the user looks up from a search engine, there is no information available.So it's a web app that can be found by search engines
>* User fragmentation time use, such as some of the less sticky applications, such as mobile search, url navigation, and so on

## 4. What kind of app should be used in the specific development process

Different page situations choose different development approaches

>* 4.1 if large paragraphs of text (such as news, strategy, etc.) appear in the app, and the format is relatively rich (such as bold, various fonts, etc.), it is better to use H5.Reason: native development is not very friendly to parsing the json string format
>* 4.2 if you pay attention to the response speed of app (including page switching fluidity), the original development shall be adopted.Reason: H5 is essentially a web page. When you change pages, you basically load the entire page, just like a browser opens a new web page
>* 4.3 if the app is sensitive to the presence or absence of network and the pros and cons of network (such as offline operation and online operation), it shall be developed natively.Although H5 can be done, it is sensitive
>* 4.4 if the app needs to make frequent calls to hardware devices (such as cameras, microphones, etc.), it adopts the native development, which supports more hardware and makes the calls faster, leaving H5 nowhere to be reached
>* 4.5 if the common pages of app users are frequently-changed (such as various marketing activities on the home page of taobao), it is easier to use H5 for maintenance
>* 4.6 if the budget is limited (H5 develops a set that can be used across android, iOS, blackberry and other platforms), regardless of user experience or load speed, it must be H5

Will the H5 replace apps in future?

>* It is found that there is a lot of coupling between them, none of them can be fully satisfied and supported, and the best performance is complementary and cross-use.
>* The future market doesn't know, but we're all cross-using at the moment, and the overall feel improves the user experience and achieves our purpose.
>* App and H5 means that you have a relationship with me and you have a relationship with each other.And there's no denying that native apps are running much more smoothly than H5 web pages.No one is going to end up with anyone in the future.


### Refer to the reading:

1. [Comparison of web app, native app and hybrid app](https://www.jianshu.com/p/24bf070a4dcb)
2. [科普：Native App、Web App与Hybrid App](http://www.woshipm.com/pd/321844.html)
3. [大家公司的app是用原生做的还是h5的呢？](https://www.pmcaff.com/discuss/index/635935159261248)
4. [H5未来真的会取代APP吗？](https://www.pmcaff.com/discuss/index/1000000000146469)