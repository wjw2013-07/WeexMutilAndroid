package com.weex.mix.activity;

import android.content.BroadcastReceiver;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.text.TextUtils;
import android.view.View;
import android.view.ViewGroup;

import com.taobao.weex.IWXRenderListener;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.common.WXRenderStrategy;
import com.weex.mix.util.AssertUtil;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by codemanwang on 2017/3/30.
 */

public abstract class AbsWeexActivity extends AppCompatActivity implements IWXRenderListener {

    protected WXSDKInstance mWXSDKInstance;
    protected BroadcastReceiver mReceiver;
    protected ViewGroup mContainer;

    private String mUrl;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        createWeexInstance();
        mWXSDKInstance.onActivityCreate();

    }

    protected String getUrl(){
        return mUrl;
    }

    protected void setUrl(String url){
        mUrl = url;
    }

    protected String getPageName(){
        return this.getLocalClassName();
    }

    protected final ViewGroup getContainer() {
        return mContainer;
    }

    protected final void setContainer(ViewGroup container) {
        mContainer = container;
    }

    protected void createWeexInstance(){
        destoryWeexInstance();
        mWXSDKInstance = new WXSDKInstance(this);
        mWXSDKInstance.registerRenderListener(this);
    }

    protected void destoryWeexInstance(){
        if (mWXSDKInstance != null){
            mWXSDKInstance.registerRenderListener(null);
            mWXSDKInstance.destroy();
            mWXSDKInstance = null;
        }
    }

    protected void renderPageByURL(String url){
        renderPageByURL(url, null);
    }

    protected void renderPageByURL(String url, String jsonInitData){
        if (TextUtils.isEmpty(url)){
            return;
        }
        setUrl(url);
        AssertUtil.throwIfNull(mContainer, new RuntimeException("Can't render page, container is null"));
        Map<String, Object> options = new HashMap<>();
        options.put(WXSDKInstance.BUNDLE_URL, url);
        mWXSDKInstance.renderByUrl(getPageName(), url, options, jsonInitData, -1, -1, WXRenderStrategy.APPEND_ASYNC);
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (mWXSDKInstance != null){
            mWXSDKInstance.onActivityStart();
        }
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (mWXSDKInstance != null){
            mWXSDKInstance.onActivityResume();
        }
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (mWXSDKInstance != null){
            mWXSDKInstance.onActivityPause();
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (mWXSDKInstance != null){
            mWXSDKInstance.onActivityStop();
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        if (mWXSDKInstance != null){
            mWXSDKInstance.onActivityDestroy();
        }
    }

    @Override
    public void onViewCreated(WXSDKInstance instance, View view) {
        if (mContainer != null){
            mContainer.removeAllViews();
            mContainer.addView(view);
        }
    }

}
