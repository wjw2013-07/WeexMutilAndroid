# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in D:\android\sdk_source/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

#############################################
#
# 对于一些基本指令的添加
#
#############################################
# 代码混淆压缩比，在0~7之间，默认为5，一般不做修改
-optimizationpasses 5

# 混合时不使用大小写混合，混合后的类名为小写
-dontusemixedcaseclassnames

# 指定不去忽略非公共库的类
-dontskipnonpubliclibraryclasses

# 这句话能够使我们的项目混淆后产生映射文件
# 包含有类名->混淆后类名的映射关系
-verbose

# 指定不去忽略非公共库的类成员
-dontskipnonpubliclibraryclassmembers

# 不做预校验，preverify是proguard的四个步骤之一，Android不需要preverify，去掉这一步能够加快混淆速度。
-dontpreverify

# 保留Annotation不混淆
-keepattributes *Annotation*,InnerClasses

# 避免混淆泛型
-keepattributes Signature

# 抛出异常时保留代码行号
-keepattributes SourceFile,LineNumberTable


-keep class * extends com.taobao.weex.common.WXModule{*;}
-keep class * extends com.taobao.weex.ui.component.WXComponent{*;}
-keep class * implements com.taobao.weex.adapter.IWXImgLoaderAdapter{*;}

-keep class com.tabao.weex.**{*;}
#-keep class com.taobao.weex.ui.view.listview.adapter.RecyclerViewBaseAdapter
#-keep class com.taobao.weex.ui.component.WXComponent
#-keep interface com.taobao.weex.ui.view.refresh.core.WXSwipeLayout$WXOnLoadingListener
#-keep interface com.taobao.weex.ui.view.refresh.core.WXSwipeLayout$WXOnRefreshListener
#-keep interface com.taobao.weex.ui.view.WXVideoView$VideoPlayListener
#-keep interface com.taobao.weex.ui.view.WXHorizontalScrollView$ScrollViewListener
-keep class com.taobao.weex.dom.**{*;}
-keep class com.taobao.weex.ui.view.**{*;}
-keep class com.taobao.weex.ui.component.**{*;}
-keep class com.taobao.weex.ui.module.**{*;}
-keep class com.taobao.weex.ui.**{*;}
-keep class com.alibaba.fastjson.**{*;}
-keep class com.taobao.weex.http.**{*;}
-keep class com.taobao.weex.common.**{*;}
-keep class com.taobao.weex.adapter.**{*;}
-keep class com.taobao.weex.bridge.**{*;}
-keep class com.taobao.weex.utils.**{*;}

-dontwarn com.tabao.weex.**

#-keep com.squareup.okhttp.**{*;}
#-keep com.squareup.picasso.**{*;}
-dontwarn com.squareup.okhttp.**
-dontwarn com.squareup.picasso.**

-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}

-keep class com.weex.mix.weex.**{*;}
-keep class com.squareup.okhttp.**{*;}