package com.weex.mix.activity;

import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.View;

/**
 * Created by codemanwang on 2017/3/17.
 */

public abstract class BaseActivity extends AppCompatActivity implements View.OnClickListener{


    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(getContentId());
        initView();
        initListener();
    }


    public abstract void initView();
    public abstract void initListener();
    public abstract int getContentId();

}
