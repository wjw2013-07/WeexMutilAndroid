package com.weex.mix.activity;

import android.content.Intent;
import android.view.View;
import android.widget.TextView;

import com.weex.mix.R;

public class MainActivity extends BaseActivity {

    private TextView mTvStart;


    @Override
    public void initView() {
        mTvStart = (TextView) findViewById(R.id.tv_start);
    }

    @Override
    public void initListener() {
        mTvStart.setOnClickListener(this);
    }

    @Override
    public int getContentId() {
        return R.layout.activity_main;
    }

    @Override
    public void onClick(View view) {
        int id = view.getId();
        if (id == R.id.tv_start){
            startActivity(new Intent(this, StartWeexActivity.class));
        }
    }
}
